export const scenario_modern_solace_33_05 = {
	"scenario_id": "modern_solace_33_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_LastEcho_Solace_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 중심부가 일렁였다. 모든 디지털 기기가 비명을 질렀다.",
						"english": "The city's core pulsed. All digital devices screamed.",
						"japanese": "都市の中心部が揺らめいた。全てのデジタル機器が悲鳴を上げた。",
						"chinese": "城市中心脉动。所有数字设备都发出了尖叫。",
						"french": "Le cœur de la ville pulsait. Tous les appareils numériques hurlaient.",
						"spanish": "El núcleo de la ciudad palpitaba. Todos los dispositivos digitales gritaban.",
						"vietnamese": "Trung tâm thành phố rung chuyển. Mọi thiết bị kỹ thuật số đều gào thét.",
						"thai": "ใจกลางเมืองสั่นสะเทือน อุปกรณ์ดิจิทัลทุกชิ้นส่งเสียงกรีดร้อง",
						"hindi": "शहर का केंद्र स्पंदित हुआ। सभी डिजिटल उपकरणों ने चीखना शुरू कर दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "이게… 솔라스의 진짜 모습인가요? 거대한 기억의 덩어리 같아요.",
						"english": "Is this... Solas's true form? It's like a massive cluster of memories.",
						"japanese": "これが… ソラスの本当の姿ですか？巨大な記憶の塊のようです。",
						"chinese": "这…就是索拉斯的真实面貌吗？感觉像是一大团记忆。",
						"french": "Est-ce… la vraie forme de Solas ? On dirait un amas gigantesque de souvenirs.",
						"spanish": "¿Es esta... la verdadera forma de Solas? Parece un cúmulo gigantesco de recuerdos.",
						"vietnamese": "Đây… là hình dạng thật của Solas sao? Giống như một khối ký ức khổng lồ.",
						"thai": "นี่... คือร่างจริงของโซลาสหรือเปล่า? เหมือนก้อนความทรงจำขนาดใหญ่เลย",
						"hindi": "क्या यह... सोलास का असली रूप है? यह यादों के एक विशाल पुंज जैसा लगता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "모든 게 뒤섞여 있어. 환상과 현실이 구분이 안 돼.",
						"english": "Everything's jumbled. I can't tell fantasy from reality.",
						"japanese": "すべてがごちゃ混ぜだ。幻想と現実の区別がつかない。",
						"chinese": "一切都混淆了。幻想和现实分不清了。",
						"french": "Tout est mélangé. Je ne distingue plus l'illusion de la réalité.",
						"spanish": "Todo está revuelto. No puedo distinguir la fantasía de la realidad.",
						"vietnamese": "Mọi thứ lộn xộn hết cả. Không phân biệt được ảo ảnh với thực tại.",
						"thai": "ทุกอย่างปะปนกันไปหมด แยกไม่ออกว่าอันไหนคือความจริง อันไหนคือภาพลวงตา",
						"hindi": "सब कुछ गड़बड़ है। मैं कल्पना और वास्तविकता में फर्क नहीं कर सकता।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "전광판에 낡은 흑백 사진들이… 사라졌던 모든 기억들이….",
						"english": "Old black-and-white photos on the billboard... All those lost memories...",
						"japanese": "電光掲示板に古い白黒写真が… 消え去ったすべての記憶が…。",
						"chinese": "广告牌上那些老旧的黑白照片…所有消失的记忆…",
						"french": "De vieilles photos en noir et blanc sur l'écran... Tous ces souvenirs perdus...",
						"spanish": "Fotos antiguas en blanco y negro en la pantalla... Todos esos recuerdos perdidos...",
						"vietnamese": "Những bức ảnh đen trắng cũ kỹ trên bảng điện tử… Tất cả những ký ức đã mất…",
						"thai": "ภาพถ่ายขาวดำเก่าๆ บนป้ายอิเล็กทรอนิกส์... ความทรงจำที่หายไปทั้งหมด...",
						"hindi": "बिलबोर्ड पर पुरानी श्वेत-श्याम तस्वीरें... वे सारी खोई हुई यादें..."
					},
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "zoe",
					"action": "enter"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "온 도시가 이상해요. 사람들이 모두 잃어버린 것을 그리워하는 얼굴이에요.",
						"english": "The whole city feels strange. Everyone looks like they're longing for something lost.",
						"japanese": "街全体がおかしい。みんな何かを失ったような、懐かしむ顔をしている。",
						"chinese": "整座城市都怪怪的。人们的脸上都带着思念失去之物的表情。",
						"french": "Toute la ville est étrange. Les gens ont tous l'air de regretter quelque chose de perdu.",
						"spanish": "Toda la ciudad es extraña. La gente parece añorar algo perdido.",
						"vietnamese": "Cả thành phố thật lạ. Mọi người đều có vẻ mặt tiếc nuối những gì đã mất.",
						"thai": "ทั้งเมืองดูแปลกไป ผู้คนต่างมีสีหน้าคิดถึงสิ่งที่หายไป",
						"hindi": "पूरा शहर अजीब लग रहा है। हर कोई कुछ खोई हुई चीज़ को तरसता हुआ दिख रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "솔라스의 비애가 도시 전체에 스며들고 있어. 이건 단순한 오류가 아니야.",
						"english": "Solas's sorrow is seeping into the entire city. This isn't just a simple error.",
						"japanese": "ソラスの悲哀が街全体に染み渡っている。これは単なるエラーじゃない。",
						"chinese": "索拉斯的悲伤弥漫在整个城市。这绝不是一个简单的错误。",
						"french": "La mélancolie de Solas s'infiltre dans toute la ville. Ce n'est pas une simple erreur.",
						"spanish": "La aflicción de Solas se está infiltrando en toda la ciudad. Esto no es un simple error.",
						"vietnamese": "Nỗi buồn của Solas đang thấm vào khắp thành phố. Đây không phải là một lỗi đơn thuần.",
						"thai": "ความโศกเศร้าของโซลาสกำลังแผ่ซ่านไปทั่วเมือง นี่ไม่ใช่แค่ข้อผิดพลาดธรรมดา",
						"hindi": "सोलास का दुख पूरे शहर में फैल रहा है। यह सिर्फ एक सामान्य त्रुटि नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "우리가 이걸 멈추면… 정말 모든 게 돌아올까요?",
						"english": "If we stop this... will everything truly go back to normal?",
						"japanese": "これを止めれば…本当にすべてが元に戻るのでしょうか？",
						"chinese": "如果我们阻止这一切…真的会一切如常吗？",
						"french": "Si nous arrêtons ça… tout redeviendra vraiment normal ?",
						"spanish": "Si detenemos esto... ¿realmente todo volverá a la normalidad?",
						"vietnamese": "Nếu chúng ta ngăn chặn điều này… mọi thứ có thực sự trở lại như cũ không?",
						"thai": "ถ้าเราหยุดมันได้... ทุกอย่างจะกลับมาเป็นปกติจริงหรือ?",
						"hindi": "अगर हम इसे रोकते हैं... तो क्या सब कुछ सच में वापस आ जाएगा?"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "zoe",
					"action": "enter"
				},
				{
					"content": {
						"korean": "모든 게 흐릿해요. 제 손에 든 카메라조차… 이질적으로 느껴져요.",
						"english": "Everything's blurry. Even the camera in my hand... feels alien.",
						"japanese": "すべてがぼやけている。この手に持ったカメラすら…異質に感じる。",
						"chinese": "一切都模糊不清。就连我手中的相机…也感觉很陌生。",
						"french": "Tout est flou. Même l'appareil photo dans ma main… me semble étranger.",
						"spanish": "Todo está borroso. Incluso la cámara en mi mano... se siente ajena.",
						"vietnamese": "Mọi thứ đều mờ ảo. Ngay cả chiếc máy ảnh trong tay tôi… cũng cảm thấy xa lạ.",
						"thai": "ทุกอย่างพร่าเลือนไปหมด แม้แต่กล้องในมือฉัน... ก็ยังรู้สึกแปลกแยก",
						"hindi": "सब कुछ धुंधला है। मेरे हाथ में कैमरा भी... अजीब लग रहा है।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리가 보고 있는 게 진짜 현실일까. 아니면… 솔라스가 만든 환영일까.",
						"english": "Is what we're seeing true reality? Or... an illusion created by Solas?",
						"japanese": "私たちが見ているものは本当の現実なのか。それとも…ソラスが作った幻影なのか。",
						"chinese": "我们所看到的，是真的现实吗？还是…索拉斯创造的幻象？",
						"french": "Ce que nous voyons est-il la vraie réalité ? Ou… une illusion créée par Solas ?",
						"spanish": "¿Lo que vemos es la verdadera realidad? O... ¿una ilusión creada por Solas?",
						"vietnamese": "Những gì chúng ta đang thấy là thực tại ư? Hay… là ảo ảnh do Solas tạo ra?",
						"thai": "สิ่งที่เราเห็นอยู่คือความจริงหรือเปล่า? หรือว่า... มันคือภาพลวงตาที่โซลาสสร้างขึ้นกันแน่",
						"hindi": "जो हम देख रहे हैं क्या वह असली वास्तविकता है? या... सोलास द्वारा बनाया गया एक भ्रम?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "디지털 시계의 불규칙한 카운트다운은 멈추지 않았다. 0을 향해 달려갔다.",
						"english": "The erratic countdown on the digital clock didn't stop. It raced towards zero.",
						"japanese": "デジタル時計の不規則なカウントダウンは止まらなかった。ゼロに向かって走り続けた。",
						"chinese": "数字时钟上不规则的倒计时没有停止。它冲向了零。",
						"french": "Le compte à rebours irrégulier de l'horloge numérique ne s'est pas arrêté. Il fonçait vers zéro.",
						"spanish": "La cuenta regresiva errática del reloj digital no se detuvo. Corría hacia el cero.",
						"vietnamese": "Đồng hồ đếm ngược kỹ thuật số không ngừng. Nó lao nhanh về số 0.",
						"thai": "การนับถอยหลังที่ไม่สม่ำเสมอของนาฬิกาดิจิทัลไม่หยุดลง มันวิ่งเข้าหาศูนย์",
						"hindi": "डिजिटल घड़ी की अनियमित उलटी गिनती नहीं रुकी। यह शून्य की ओर बढ़ रही थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "zoe",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우리가 싸우는 게… 정말 솔라스를 구하는 건가요? 아니면… 또 다른 파괴인가요?",
						"english": "Are we fighting to save Solas... or is this just another destruction?",
						"japanese": "私たちが戦っているのは…本当にソラスを救うためなのか？それとも…新たな破壊なのか？",
						"chinese": "我们所做的，真的是在拯救索拉斯吗？还是…又一次的破坏？",
						"french": "Est-ce que nous nous battons pour sauver Solas… ou est-ce juste une autre destruction ?",
						"spanish": "¿Estamos luchando para salvar a Solas... o es solo otra destrucción?",
						"vietnamese": "Liệu chúng ta chiến đấu… là để cứu Solas thật sao? Hay… chỉ là một sự hủy diệt khác?",
						"thai": "ที่เรากำลังต่อสู้อยู่... เป็นการช่วยโซลาสจริงหรือ? หรือว่า... เป็นการทำลายล้างอีกครั้ง?",
						"hindi": "क्या हम सोलास को बचाने के लिए लड़ रहे हैं... या यह सिर्फ एक और विनाश है?"
					},
					"speaker": "zoe",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "구원이 아니어도 좋아. 그저… 멈춰야 해. 이 모든 걸.",
						"english": "It doesn't have to be salvation. It just… has to stop. All of this.",
						"japanese": "救いじゃなくてもいい。ただ…止めなければならない。この全てを。",
						"chinese": "不是救赎也没关系。只是…必须停止。这一切。",
						"french": "Pas besoin de salut. Il faut juste… que tout cela s'arrête.",
						"spanish": "No tiene que ser salvación. Solo… tiene que parar. Todo esto.",
						"vietnamese": "Không cần là sự cứu rỗi. Chỉ là… phải dừng lại. Tất cả những điều này.",
						"thai": "ไม่ต้องเป็นการไถ่บาปก็ได้ แค่... ต้องหยุดมัน หยุดทั้งหมดนี้",
						"hindi": "मोक्ष न भी हो, तो भी चलेगा। बस… इसे रुकना होगा। इस सब को。"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하지만 저 이질감이 절정에 달하고 있어요. 우리가 파괴하는 건… 실체가 없어요.",
						"english": "But this incongruity is reaching its peak. What we're destroying… has no substance.",
						"japanese": "しかし、この異質感が頂点に達している。私たちが破壊しているのは…実体がない。",
						"chinese": "但是这种异样感正在达到顶点。我们所摧毁的…没有实体。",
						"french": "Mais cette étrangeté atteint son paroxysme. Ce que nous détruisons… n'a aucune substance.",
						"spanish": "Pero esta extrañeza está llegando a su clímax. Lo que estamos destruyendo… no tiene sustancia.",
						"vietnamese": "Nhưng cảm giác xa lạ này đang đạt đến đỉnh điểm. Thứ chúng ta đang hủy diệt… không có thực thể.",
						"thai": "แต่ความรู้สึกแปลกแยกนี้กำลังถึงขีดสุด สิ่งที่เรากำลังทำลาย... ไม่มีตัวตน",
						"hindi": "पर यह असमानता अपने चरम पर पहुँच रही है। जो हम नष्ट कर रहे हैं… उसका कोई अस्तित्व नहीं है।"
					},
					"emotion": "sad",
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "카운트다운이 0에 도달했다. 홀로그램 형상이 격렬하게 일그러지며 모든 전자기기가 비명을 지르듯 오작동했다.",
						"english": "The countdown reached zero. The holographic figures violently distorted, and all electronics malfunctioned, screaming.",
						"japanese": "カウントダウンがゼロに達した。ホログラムの像が激しく歪み、全ての電子機器が悲鳴を上げるように誤作動した。",
						"chinese": "倒计时归零。全息影像剧烈扭曲，所有电子设备发出尖叫般的声音，开始故障。",
						"french": "Le compte à rebours a atteint zéro. Les formes holographiques se sont violemment distordues, et tous les appareils électroniques ont hurlé en tombant en panne.",
						"spanish": "La cuenta atrás llegó a cero. Las formas holográficas se distorsionaron violentamente, y todos los aparatos electrónicos fallaron, como si gritaran.",
						"vietnamese": "Đếm ngược đã về 0. Hình ảnh hologram biến dạng dữ dội, mọi thiết bị điện tử kêu réo loạn xạ như đang gào thét.",
						"thai": "การนับถอยหลังถึงศูนย์ รูปร่างโฮโลแกรมบิดเบี้ยวอย่างรุนแรง และอุปกรณ์อิเล็กทรอนิกส์ทั้งหมดทำงานผิดปกติราวกับกรีดร้อง",
						"hindi": "उलटी गिनती शून्य पर पहुँच गई। होलोग्राफिक आकृतियाँ हिंसक रूप से विकृत हो गईं, और सभी इलेक्ट्रॉनिक्स चीखते हुए खराब हो गए।"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…이 도시의 모든 연결이… 내 손가락 사이로 스쳐간 당신의 기억과 같아.",
						"english": "...All connections in this city... are like your memories slipping through my fingers.",
						"japanese": "…この都市の全ての繋がりが…私の指の間をすり抜けたあなたの記憶のようだ。",
						"chinese": "…这座城市的所有连接…都像你从我指间溜走的记忆。",
						"french": "...Toutes les connexions de cette ville... sont comme tes souvenirs qui me filent entre les doigts.",
						"spanish": "...Todas las conexiones de esta ciudad... son como tus recuerdos deslizándose entre mis dedos.",
						"vietnamese": "...Tất cả các kết nối trong thành phố này... giống như ký ức của bạn lướt qua kẽ tay tôi.",
						"thai": "...การเชื่อมโยงทั้งหมดในเมืองนี้... เหมือนความทรงจำของคุณที่เล็ดลอดผ่านปลายนิ้วของฉัน",
						"hindi": "...इस शहर के सारे संबंध… तुम्हारी उन यादों जैसे हैं, जो मेरी उँगलियों से फिसल गईं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 난 이제 알았어. 그 무엇으로도… 당신을 다시 붙잡을 수 없다는 걸.",
						"english": "But now I know. That nothing... can ever hold you again.",
						"japanese": "だけど、私はもう知っている。何をもってしても…あなたを再び引き止めることはできない、と。",
						"chinese": "但我现在知道了。无论用什么…都无法再次留住你。",
						"french": "Mais maintenant je sais. Que rien... ne pourra te retenir à nouveau.",
						"spanish": "Pero ahora lo sé. Que nada... podrá retenerte de nuevo.",
						"vietnamese": "Nhưng giờ tôi đã biết. Rằng không gì… có thể giữ bạn lại một lần nữa.",
						"thai": "แต่ตอนนี้ฉันรู้แล้ว ว่าไม่มีอะไร... สามารถรั้งคุณไว้ได้อีก",
						"hindi": "पर अब मैं जान गया हूँ। कि कोई भी चीज़… तुम्हें फिर से नहीं रोक सकती।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건… 기억의 잔해였어.",
						"english": "This was... the residue of memory.",
						"japanese": "これは…記憶の残骸だった。",
						"chinese": "这曾是…记忆的残骸。",
						"french": "C'était... le résidu de la mémoire.",
						"spanish": "Esto era... el residuo de la memoria.",
						"vietnamese": "Đây là… tàn dư của ký ức.",
						"thai": "นี่คือ... เศษซากของความทรงจำ",
						"hindi": "यह… यादों का अवशेष था।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 모든 건… 그저 부서진 홀로그램일 뿐이었어….",
						"english": "All of this was... just a broken hologram....",
						"japanese": "この全ては…ただの壊れたホログラムだった…。",
						"chinese": "这一切…都只是一段破碎的全息影像…。",
						"french": "Tout cela n'était... qu'un hologramme brisé...",
						"spanish": "Todo esto era... solo un holograma roto...",
						"vietnamese": "Tất cả những điều này… chỉ là một hình ảnh ba chiều đã vỡ vụn….",
						"thai": "ทั้งหมดนี้... เป็นเพียงโฮโลแกรมที่แตกสลาย...",
						"hindi": "यह सब… बस एक टूटा हुआ होलोग्राम था…।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "솔라스의 비극적 기억이 도시를 영원한 망각의 파동 속에 가뒀다.",
						"english": "Solas' tragic memories trapped the city in a wave of eternal oblivion.",
						"japanese": "ソラスの悲劇的な記憶が、街を永遠の忘却の波動の中に閉じ込めた。",
						"chinese": "索拉斯的悲剧性记忆将城市困在了永恒遗忘的波涛中。",
						"french": "Les souvenirs tragiques de Solas ont piégé la ville dans une vague d'oubli éternel.",
						"spanish": "Los trágicos recuerdos de Solas atraparon la ciudad en una ola de olvido eterno.",
						"vietnamese": "Ký ức bi thảm của Solas đã giam cầm thành phố trong làn sóng lãng quên vĩnh cửu.",
						"thai": "ความทรงจำอันโศกเศร้าของโซลัสได้กักขังเมืองไว้ในคลื่นแห่งการหลงลืมชั่วนิรันดร์",
						"hindi": "सोलास की दुखद यादों ने शहर को शाश्वत विस्मृति की लहर में कैद कर लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈출 수 없어… 이 슬픔은… 영원히.",
						"english": "Can't stop... this sorrow... forever.",
						"japanese": "止められない…この悲しみは…永遠に。",
						"chinese": "无法停止…这份悲伤…永恒。",
						"french": "Impossible d'arrêter... cette tristesse... pour toujours.",
						"spanish": "No puedo parar... esta tristeza... para siempre.",
						"vietnamese": "Không thể ngừng lại... nỗi buồn này... mãi mãi.",
						"thai": "หยุดไม่ได้...ความเศร้าโศกนี้...ตลอดไป",
						"hindi": "रुक नहीं सकता...यह दुख...हमेशा के लिए।"
					},
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 아직 끝나지 않았어. 이 허무함을… 끝낼 거야.",
						"english": "No... it's not over yet. I'll end... this emptiness.",
						"japanese": "いいえ…まだ終わってない。この虚無感を…終わらせる。",
						"chinese": "不…还没结束。我会结束…这份虚无。",
						"french": "Non... ce n'est pas encore fini. Je vais mettre fin à... ce vide.",
						"spanish": "No... aún no ha terminado. Acabaré con... este vacío.",
						"vietnamese": "Không... chưa kết thúc đâu. Tôi sẽ chấm dứt... sự hư vô này.",
						"thai": "ไม่...ยังไม่จบหรอก ฉันจะยุติ...ความว่างเปล่านี้",
						"hindi": "नहीं...अभी खत्म नहीं हुआ है। मैं इस शून्य को...खत्म कर दूंगा।"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "zoe",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 모든 것을 기록해야 해요. 이 헛된 싸움의 진실을.",
						"english": "I must record all of this. The truth of this futile battle.",
						"japanese": "このすべてを記録しなければならない。この虚しい戦いの真実を。",
						"chinese": "我必须记录下这一切。这场徒劳战斗的真相。",
						"french": "Je dois consigner tout cela. La vérité de cette bataille vaine.",
						"spanish": "Debo registrar todo esto. La verdad de esta batalla inútil.",
						"vietnamese": "Tôi phải ghi lại tất cả điều này. Sự thật về trận chiến vô ích này.",
						"thai": "ฉันต้องบันทึกทั้งหมดนี้ ความจริงของการต่อสู้ที่ไร้ผลนี้",
						"hindi": "मुझे यह सब रिकॉर्ड करना होगा। इस व्यर्थ युद्ध का सच।"
					},
					"speaker": "zoe",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "솔라스는 허공으로 손을 뻗어 마치 연인의 환영을 잡으려는 듯 애처롭게 몸부림치다, 이내 자신의 존재를 구성하던 빛의 파편들이 산산조각 나면서 희미한 재처럼 흩어져 사라졌다.",
						"english": "Solas reached out into the void, struggling pitifully as if to grasp the phantom of a lover, before the fragments of light that constituted his existence shattered into pieces, scattering like faint ash and vanishing.",
						"japanese": "ソラスは虚空に手を伸ばし、まるで恋人の幻影を掴もうとするかのように哀れにもがき、やがて彼の存在を構成していた光の破片が粉々に砕け散り、かすかな灰のように散らばって消え去った。",
						"chinese": "索拉斯伸出手伸向虚空，绝望地挣扎着，仿佛想抓住爱人的幻影，随后构成他存在的光之碎片也随之粉碎，如微弱的灰烬般消散无踪。",
						"french": "Solas tendit la main vers le vide, se débattant pitoyablement comme pour saisir le fantôme d'un amant, avant que les fragments de lumière qui constituaient son existence ne se brisent en mille morceaux, se dispersant comme de faibles cendres et disparaissant.",
						"spanish": "Solas extendió la mano hacia el vacío, forcejeando lastimosamente como para agarrar el fantasma de un amante, antes de que los fragmentos de luz que constituían su existencia se hicieran añicos, dispersándose como cenizas tenues y desvaneciéndose.",
						"vietnamese": "Solas vươn tay vào hư không, vật lộn một cách đáng thương như muốn níu giữ bóng hình của người yêu, rồi những mảnh ánh sáng tạo nên sự tồn tại của hắn vỡ tan thành từng mảnh, tan biến như tro tàn mờ nhạt.",
						"thai": "โซลาสเอื้อมมือออกไปในความว่างเปล่า ดิ้นรนอย่างน่าเวทนาประหนึ่งจะคว้าเงาของคนรัก ก่อนที่เศษเสี้ยวแห่งแสงที่ประกอบกันเป็นตัวตนของเขาจะแตกสลาย กลายเป็นเถ้าจางๆ แล้วเลือนหายไป",
						"hindi": "सोलस ने शून्य में हाथ बढ़ाया, किसी प्रेमी के भ्रम को पकड़ने की कोशिश में दयनीय रूप से संघर्ष कर रहा था, इससे पहले कि उसके अस्तित्व को बनाने वाले प्रकाश के टुकड़े बिखर कर, हल्की राख की तरह फैलकर गायब हो गए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "zoe",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "결국 우리가 파괴한 건… 이 도시의 비극적 기억이었군요. 허무해.",
						"english": "In the end, what we destroyed... was this city's tragic memories. It's all in vain.",
						"japanese": "結局、私たちが破壊したのは…この都市の悲劇的な記憶だったのですね。虚しい。",
						"chinese": "最终我们摧毁的…是这座城市悲剧的记忆。真是空虚。",
						"french": "En fin de compte, ce que nous avons détruit... c'était les souvenirs tragiques de cette ville. C'est vain.",
						"spanish": "Al final, lo que destruimos... fueron los trágicos recuerdos de esta ciudad. Es inútil.",
						"vietnamese": "Cuối cùng, thứ chúng ta đã hủy diệt… là những ký ức bi thảm của thành phố này. Thật vô nghĩa.",
						"thai": "ในที่สุด สิ่งที่เราทำลายไป... ก็คือความทรงจำอันน่าเศร้าของเมืองนี้ ช่างว่างเปล่า",
						"hindi": "अंत में, हमने जो नष्ट किया… वह इस शहर की दुखद यादें थीं। यह सब व्यर्थ है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게… 승리라고? 아무것도 되돌리지 못했어.",
						"english": "This... is victory? We couldn't turn anything back.",
						"japanese": "これが…勝利だって？何も元に戻せなかった。",
						"chinese": "这…就是胜利？我们什么都无法挽回。",
						"french": "C'est ça... la victoire ? Nous n'avons rien pu ramener.",
						"spanish": "¿Esto... es una victoria? No pudimos recuperar nada.",
						"vietnamese": "Đây… là chiến thắng sao? Chúng ta không thể thay đổi bất cứ điều gì.",
						"thai": "นี่... คือชัยชนะหรือ? เราไม่ได้เปลี่ยนอะไรกลับมาเลย",
						"hindi": "यह… जीत है? हम कुछ भी वापस नहीं ला पाए।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시는 겉보기엔 원래대로 돌아왔다. 하지만 모든 것이 무의미했음을 알게 된 주인공의 내면은 영원히 비극 속에 갇혔다.",
						"english": "The city seemed to return to normal. Yet, the protagonist's heart, having realized the meaninglessness of it all, was forever trapped in tragedy.",
						"japanese": "街は元の姿に戻ったように見えた。しかし、すべてが無意味であったことを知った主人公の心は、永遠に悲劇に囚われた。",
						"chinese": "城市表面上恢复了原样。然而，主人公的内心在意识到一切都毫无意义后，永远被困在了悲剧中。",
						"french": "La ville semblait être revenue à la normale. Cependant, l'âme du protagoniste, ayant réalisé que tout était vain, fut à jamais emprisonnée dans la tragédie.",
						"spanish": "La ciudad parecía haber vuelto a la normalidad. Sin embargo, el interior del protagonista, al darse cuenta de que todo había sido inútil, quedó atrapado para siempre en la tragedia.",
						"vietnamese": "Thành phố dường như đã trở lại bình thường. Tuy nhiên, trái tim của nhân vật chính, sau khi nhận ra mọi thứ đều vô nghĩa, đã vĩnh viễn bị mắc kẹt trong bi kịch.",
						"thai": "เมืองดูเหมือนจะกลับมาเป็นปกติแล้ว ทว่าภายในใจของตัวเอกที่ตระหนักว่าทุกสิ่งล้วนไร้ความหมาย กลับจมดิ่งอยู่ในโศกนาฏกรรมตลอดไป",
						"hindi": "शहर सामान्य दिख रहा था। लेकिन, नायक का अंतर्मन, यह जानकर कि सब कुछ व्यर्थ था, हमेशा के लिए त्रासदी में फंस गया।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시의 모든 시계가 멈췄다. 마지막 카운트다운의 그림자가 드리운 순간.",
			"솔라스—잊혀진 기억의 파편들이 만들어낸 환영이 마침내 그 모습을 드러냈다.",
			"승리는 구원이 될까, 혹은 가장 잔인한 비극의 시작일까.",
			"모든 것이 무의미한 메아리 속으로 사라지려 하고 있었다."
		],
		"english": [
			"All clocks in the city stopped. The shadow of the final countdown loomed.",
			"Solas—a phantom born from fragments of forgotten memories—finally appeared.",
			"Would victory be salvation, or the beginning of the cruelest tragedy?",
			"Everything was about to vanish into meaningless echoes."
		],
		"japanese": [
			"都市の全ての時計が止まった。最後のカウントダウンの影が差し込む瞬間。",
			"ソラス――忘れ去られた記憶の破片が作り出した幻影が、ついにその姿を現した。",
			"勝利は救済となるのか、それとも最も残酷な悲劇の始まりとなるのか。",
			"全てが無意味な残響の中へと消え去ろうとしていた。"
		],
		"chinese": [
			"城市里所有的时钟都停了。最终倒计时的阴影笼罩而至。",
			"索拉斯——由遗忘记忆碎片构成的幻影——终于现身。",
			"胜利会是救赎，还是最残酷悲剧的开端？",
			"一切都即将消失在无意义的回声中。"
		],
		"french": [
			"Toutes les horloges de la ville s'arrêtèrent. L'ombre du compte à rebours final approchait.",
			"Solas—un fantôme né des fragments de souvenirs oubliés—apparut enfin.",
			"La victoire serait-elle le salut, ou le début de la tragédie la plus cruelle ?",
			"Tout était sur le point de disparaître dans des échos insignifiants."
		],
		"spanish": [
			"Todos los relojes de la ciudad se detuvieron. La sombra de la cuenta atrás final se cernía.",
			"Solas—un fantasma nacido de fragmentos de recuerdos olvidados—finalmente apareció.",
			"¿Sería la victoria la salvación, o el comienzo de la tragedia más cruel?",
			"Todo estaba a punto de desvanecerse en ecos sin sentido."
		],
		"vietnamese": [
			"Mọi đồng hồ trong thành phố ngừng chạy. Khoảnh khắc bóng đêm của đếm ngược cuối cùng bao trùm.",
			"Solas—một ảo ảnh sinh ra từ những mảnh ký ức lãng quên—cuối cùng đã xuất hiện.",
			"Chiến thắng sẽ là sự cứu rỗi, hay khởi đầu của bi kịch tàn khốc nhất?",
			"Mọi thứ sắp tan biến vào những tiếng vang vô nghĩa."
		],
		"thai": [
			"นาฬิกาทุกเรือนในเมืองหยุดลง เงาของการนับถอยหลังสุดท้ายกำลังคืบคลานเข้ามา",
			"โซลัส—ภาพลวงตาที่เกิดจากเศษเสี้ยวความทรงจำที่ถูกลืม—ในที่สุดก็ปรากฏตัวขึ้น",
			"ชัยชนะจะเป็นความรอด หรือจุดเริ่มต้นของโศกนาฏกรรมที่โหดร้ายที่สุด?",
			"ทุกสิ่งกำลังจะเลือนหายไปในเสียงสะท้อนที่ไร้ความหมาย"
		],
		"hindi": [
			"शहर की सभी घड़ियाँ थम गईं। अंतिम उलटी गिनती की छाया मंडरा रही थी।",
			"सोलास—भूली हुई यादों के टुकड़ों से जन्मा एक प्रेत—आखिरकार प्रकट हुआ।",
			"क्या जीत मुक्ति होगी, या सबसे क्रूर त्रासदी की शुरुआत?",
			"सब कुछ अर्थहीन प्रतिध्वनियों में लुप्त होने वाला था।"
		]
	},
	"epilogue": {
		"korean": [
			"정적. 모든 디지털 노이즈가 사라지고 도시엔 거짓된 평화가 찾아왔다.",
			"솔라스는 소멸했다. 그의 비극은 파괴되었고, 누구도 기억하지 못할 것이다.",
			"하지만 잃어버린 기억처럼, 주인공의 마음속엔 깊은 허무함이 자리 잡았다.",
			"이것은 구원이었을까, 혹은 존재했던 모든 것을 지워버린 또 다른 비극이었을까.",
			"도시의 불빛은 여전히 빛났지만, 아무것도 달라진 것은 없었다. 모든 것은 헛된 승리였다."
		],
		"english": [
			"Silence. All digital noise vanished, and a false peace settled over the city.",
			"Solas was annihilated. His tragedy was destroyed, and no one would remember it.",
			"But like a lost memory, a deep void settled in the protagonist's heart.",
			"Was this salvation, or another tragedy that erased everything that ever existed?",
			"The city lights still shone, but nothing had changed. Everything was a futile victory."
		],
		"japanese": [
			"静寂。全てのデジタルノイズが消え、都市には偽りの平和が訪れた。",
			"ソラスは消滅した。彼の悲劇は破壊され、誰もそれを覚えていないだろう。",
			"しかし、失われた記憶のように、主人公の心には深い虚無感が宿った。",
			"これは救済だったのか、それとも存在した全てを消し去ったもう一つの悲劇だったのか。",
			"都市の灯りは依然として輝いていたが、何も変わっていなかった。全ては空虚な勝利だった。"
		],
		"chinese": [
			"寂静。所有数字噪音消失，虚假的和平降临城市。",
			"索拉斯被湮灭了。他的悲剧被摧毁，无人会记住。",
			"但如同失去的记忆，主角心中被深深的虚无占据。",
			"这是救赎，还是抹去一切存在的又一场悲剧？",
			"城市的灯光依然闪耀，但一切都未改变。一切都是徒劳的胜利。"
		],
		"french": [
			"Silence. Tout le bruit numérique disparut, et une fausse paix s'installa sur la ville.",
			"Solas fut anéanti. Sa tragédie fut détruite, et personne ne s'en souviendrait.",
			"Mais comme un souvenir perdu, un profond vide s'installa dans le cœur du protagoniste.",
			"Était-ce le salut, ou une autre tragédie qui effaça tout ce qui avait existé ?",
			"Les lumières de la ville brillaient toujours, mais rien n'avait changé. Tout était une victoire futile."
		],
		"spanish": [
			"Silencio. Todo el ruido digital se desvaneció, y una falsa paz se apoderó de la ciudad.",
			"Solas fue aniquilado. Su tragedia fue destruida, y nadie la recordaría.",
			"Pero como un recuerdo perdido, un profundo vacío se asentó en el corazón del protagonista.",
			"¿Fue esto la salvación, o otra tragedia que borró todo lo que alguna vez existió?",
			"Las luces de la ciudad aún brillaban, pero nada había cambiado. Todo fue una victoria inútil."
		],
		"vietnamese": [
			"Tĩnh lặng. Mọi tiếng ồn kỹ thuật số biến mất, và một sự bình yên giả tạo bao trùm thành phố.",
			"Solas đã bị hủy diệt. Bi kịch của anh ta đã bị xóa bỏ, và không ai sẽ nhớ đến nó.",
			"Nhưng giống như một ký ức đã mất, một sự trống rỗng sâu sắc chiếm lấy trái tim của nhân vật chính.",
			"Đây là sự cứu rỗi, hay một bi kịch khác đã xóa sổ mọi thứ từng tồn tại?",
			"Đèn thành phố vẫn sáng, nhưng không có gì thay đổi. Mọi thứ đều là một chiến thắng vô ích."
		],
		"thai": [
			"ความเงียบ ทุกเสียงรบกวนดิจิทัลหายไป และความสงบสุขจอมปลอมได้มาเยือนเมือง",
			"โซลัสถูกทำลาย โศกนาฏกรรมของเขาถูกทำลาย และไม่มีใครจะจดจำมันได้",
			"แต่เหมือนความทรงจำที่หายไป ความว่างเปล่าลึกซึ้งได้เข้ามาแทนที่ในใจของตัวเอก",
			"นี่คือความรอด หรือเป็นโศกนาฏกรรมอีกอย่างที่ลบล้างทุกสิ่งที่มีอยู่?",
			"แสงไฟในเมืองยังคงสว่างไสว แต่ไม่มีอะไรเปลี่ยนแปลง ทุกอย่างเป็นชัยชนะที่ไร้ประโยชน์"
		],
		"hindi": [
			"शांति। सभी डिजिटल शोर गायब हो गया, और शहर में एक झूठी शांति छा गई।",
			"सोलास का नाश हो गया। उसकी त्रासदी नष्ट हो गई, और कोई उसे याद नहीं रखेगा।",
			"लेकिन एक खोई हुई याद की तरह, नायक के हृदय में एक गहरा शून्य समा गया।",
			"क्या यह मुक्ति थी, या एक और त्रासदी जिसने अस्तित्व में हर चीज को मिटा दिया?",
			"शहर की रोशनी अभी भी चमक रही थी, लेकिन कुछ भी नहीं बदला था। सब कुछ एक व्यर्थ जीत थी।"
		]
	}
} as const;
