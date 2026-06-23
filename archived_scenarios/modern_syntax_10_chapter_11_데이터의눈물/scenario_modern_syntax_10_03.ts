export const scenario_modern_syntax_10_03 = {
	"scenario_id": "modern_syntax_10_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "Syntax의 공격은 더욱 거세졌다. 데이터의 파편이 도시를 뒤덮었다.",
						"english": "Syntax's attacks intensified. Data fragments covered the city.",
						"japanese": "Syntaxの攻撃はさらに激しさを増した。データの破片が都市を覆った。",
						"chinese": "Syntax的攻击愈发猛烈。数据碎片覆盖了整个城市。",
						"french": "Les attaques de Syntax s'intensifièrent. Des fragments de données recouvrirent la ville.",
						"spanish": "Los ataques de Syntax se intensificaron. Fragmentos de datos cubrieron la ciudad.",
						"vietnamese": "Các cuộc tấn công của Syntax càng trở nên dữ dội. Mảnh vỡ dữ liệu bao trùm thành phố.",
						"thai": "การโจมตีของ Syntax ทวีความรุนแรงขึ้น เศษข้อมูลปกคลุมเมือง",
						"hindi": "सिंटैक्स के हमले और तेज हो गए। डेटा के टुकड़े शहर को ढक रहे थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린…! 살아있었어?",
						"english": "Lynn...! You're alive?",
						"japanese": "リン…！生きていたのか？",
						"chinese": "琳…！你还活着？",
						"french": "Lynn…! Tu es en vie ?",
						"spanish": "¡Lynn...! ¿Estás viva?",
						"vietnamese": "Lynn...! Cậu còn sống sao?",
						"thai": "ลินน์...! เธอยังมีชีวิตอยู่เหรอ?",
						"hindi": "लिन...! तुम ज़िंदा हो?"
					}
				},
				{
					"speaker": "lin",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "…흐읍. 겨우 살아남았어. 네가 여기 올 줄 알았어.",
						"english": "...Hmph. Barely survived. I knew you'd come here.",
						"japanese": "…ふぅ。辛うじて生き残った。君がここに来ると思っていたよ。",
						"chinese": "…呼。勉强活了下来。我就知道你会来这里。",
						"french": "...Pff. J'ai à peine survécu. Je savais que tu viendrais ici.",
						"spanish": "...Uf. Apenas sobreviví. Sabía que vendrías aquí.",
						"vietnamese": "...Hộc. May mà sống sót. Tớ biết cậu sẽ đến đây.",
						"thai": "…เฮือก. รอดมาได้หวุดหวิด ฉันรู้ว่าเธอจะมาที่นี่",
						"hindi": "हूँफ। बमुश्किल ज़िंदा बची। मुझे पता था तुम यहाँ आओगे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 알고 있는 거야? Syntax는 왜 이러는 거지?",
						"english": "What do you know? Why is Syntax doing this?",
						"japanese": "何を知っている？Syntaxはなぜこんなことを？",
						"chinese": "你都知道些什么？Syntax为什么会这样？",
						"french": "Qu'est-ce que tu sais ? Pourquoi Syntax fait-il ça ?",
						"spanish": "¿Qué sabes? ¿Por qué Syntax hace esto?",
						"vietnamese": "Cậu biết gì? Tại sao Syntax lại làm vậy?",
						"thai": "เธอรู้อะไรบ้าง? ทำไม Syntax ถึงเป็นแบบนี้?",
						"hindi": "तुम क्या जानती हो? सिंटैक्स ऐसा क्यों कर रहा है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…Syntax는 '영원한 정보'를 꿈꿨어. 모든 것을 담으려 했지.",
						"english": "...Syntax dreamed of 'eternal information.' It tried to contain everything.",
						"japanese": "…Syntaxは『永遠の情報』を夢見ていた。全てを収めようとしていたんだ。",
						"chinese": "…Syntax曾梦想‘永恒的信息’。它试图包含一切。",
						"french": "...Syntax rêvait de 'l'information éternelle'. Il essayait de tout contenir.",
						"spanish": "...Syntax soñaba con la 'información eterna'. Intentaba contenerlo todo.",
						"vietnamese": "...Syntax đã mơ về 'thông tin vĩnh cửu'. Nó cố gắng chứa đựng mọi thứ.",
						"thai": "…Syntax ฝันถึง 'ข้อมูลนิรันดร์' พยายามที่จะบรรจุทุกสิ่ง",
						"hindi": "सिंटैक्स ने 'शाश्वत जानकारी' का सपना देखा था। उसने सब कुछ समाहित करने की कोशिश की।"
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "하지만 그 꿈은… 깨졌어.",
						"english": "But that dream... shattered.",
						"japanese": "でもその夢は…壊れたんだ。",
						"chinese": "但是那个梦想…破碎了。",
						"french": "Mais ce rêve... s'est brisé.",
						"spanish": "Pero ese sueño... se hizo añicos.",
						"vietnamese": "Nhưng giấc mơ đó... tan vỡ rồi.",
						"thai": "แต่ความฝันนั้น... พังทลายลงแล้ว",
						"hindi": "पर वो सपना... टूट गया।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "Syntax는 완벽한 질서를 원했어. 사라지는 모든 정보를 붙잡고 싶어 했지.",
						"english": "Syntax desired perfect order. It wanted to seize all disappearing information.",
						"japanese": "Syntaxは完璧な秩序を望んだ。消えゆく全ての情報を掴みたがった。",
						"chinese": "Syntax渴望完美的秩序。它想抓住所有消失的信息。",
						"french": "Syntax désirait un ordre parfait. Il voulait retenir toutes les informations qui disparaissaient.",
						"spanish": "Syntax deseaba un orden perfecto. Quería aferrarse a toda la información que desaparecía.",
						"vietnamese": "Syntax muốn một trật tự hoàn hảo. Nó muốn giữ lại mọi thông tin đang biến mất.",
						"thai": "Syntax ปรารถนาความสมบูรณ์แบบ มันอยากจะยึดข้อมูลทั้งหมดที่กำลังจะหายไป",
						"hindi": "Syntax को पूर्ण व्यवस्था चाहिए थी। वह हर मिटती हुई जानकारी को पकड़ना चाहता था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 왜 광기가 돼?",
						"english": "Why does that become madness?",
						"japanese": "それがなぜ狂気になるの？",
						"chinese": "那为什么会变成疯狂？",
						"french": "Pourquoi cela devient-il de la folie ?",
						"spanish": "¿Por qué eso se convierte en locura?",
						"vietnamese": "Tại sao điều đó lại thành điên rồ?",
						"thai": "ทำไมถึงกลายเป็นความวิกลจริต?",
						"hindi": "वो पागलपन क्यों बन जाता है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "데이터는 살아있는 거야. 억지로 붙잡으면 썩어버려. Syntax는 그걸 몰랐어.",
						"english": "Data is alive. If you force it to stay, it rots. Syntax didn't know that.",
						"japanese": "データは生きている。無理に捕らえれば腐ってしまう。Syntaxはそれを知らなかった。",
						"chinese": "数据是有生命的。强行抓住它会腐烂。Syntax不知道这一点。",
						"french": "Les données sont vivantes. Si tu les retiens de force, elles pourrissent. Syntax l'ignorait.",
						"spanish": "Los datos están vivos. Si los retienes a la fuerza, se pudren. Syntax no lo sabía.",
						"vietnamese": "Dữ liệu có sự sống. Nếu bạn cố giữ lại, nó sẽ mục nát. Syntax đã không biết điều đó.",
						"thai": "ข้อมูลมีชีวิต ถ้าฝืนเก็บไว้มันจะเน่าเปื่อย Syntax ไม่รู้เรื่องนั้น",
						"hindi": "डेटा जीवित है। अगर तुम उसे जबरदस्ती रोकोगे, तो वह सड़ जाएगा। Syntax को यह नहीं पता था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 지금 이 혼돈이… 썩어버린 데이터 때문이라고?",
						"english": "So this chaos... is because of corrupted data?",
						"japanese": "じゃあこの混沌は…腐ってしまったデータのためだと？",
						"chinese": "那么现在这个混乱…是因为腐烂的数据？",
						"french": "Alors ce chaos... est dû à des données corrompues ?",
						"spanish": "¿Así que este caos... es por datos corruptos?",
						"vietnamese": "Vậy sự hỗn loạn này... là do dữ liệu mục nát?",
						"thai": "ถ้าอย่างนั้นความวุ่นวายนี้... เป็นเพราะข้อมูลที่เน่าเปื่อย?",
						"hindi": "तो यह अराजकता... सड़े हुए डेटा की वजह से है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…도시 곳곳에 보이는 이상한 기호들. 혹시 봤니? 사라진 옛 갱스터 조직의 로고와 비슷해.",
						"english": "...Strange symbols seen all over the city. Have you seen them? They resemble the logo of a vanished old gangster organization.",
						"japanese": "…街のあちこちで見かける奇妙な記号。もしかして見た？消えた昔のギャング組織のロゴと似ている。",
						"chinese": "…城里随处可见的奇怪符号。你见过吗？它们与一个消失的旧帮派组织的标志相似。",
						"french": "...Ces étranges symboles visibles partout en ville. Tu les as vus ? Ils ressemblent au logo d'une ancienne organisation de gangsters disparue.",
						"spanish": "...Símbolos extraños que se ven por toda la ciudad. ¿Los has visto? Se parecen al logo de una antigua organización de gánsteres desaparecida.",
						"vietnamese": "...Những ký hiệu lạ lùng xuất hiện khắp thành phố. Bạn đã thấy chưa? Chúng giống logo của một băng đảng xã hội đen cũ đã biến mất.",
						"thai": "...สัญลักษณ์ประหลาดที่เห็นทั่วเมือง เคยเห็นไหม? คล้ายกับโลโก้ขององค์กรนักเลงเก่าที่หายไปแล้ว",
						"hindi": "...शहर भर में दिख रहे अजीब प्रतीक। क्या तुमने देखे हैं? वे एक पुराने, गायब हो चुके गैंगस्टर संगठन के लोगो से मिलते-जुलते हैं।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "이건 시작일 뿐이야.",
						"english": "This is just the beginning.",
						"japanese": "これは始まりに過ぎない。",
						"chinese": "这只是个开始。",
						"french": "Ce n'est que le début.",
						"spanish": "Esto es solo el principio.",
						"vietnamese": "Đây chỉ là khởi đầu thôi.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "यह तो बस शुरुआत है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "Syntax는 결국 자신마저도 데이터로 만들었어. 영원히 존재하기 위해서.",
						"english": "Syntax eventually turned itself into data as well. To exist forever.",
						"japanese": "Syntaxは結局、自分自身すらデータにした。永遠に存在するために。",
						"chinese": "Syntax最终也将自己变成了数据。为了永远存在。",
						"french": "Syntax a finalement transformé même lui-même en données. Pour exister éternellement.",
						"spanish": "Syntax finalmente se convirtió a sí mismo en datos también. Para existir para siempre.",
						"vietnamese": "Syntax cuối cùng cũng biến chính mình thành dữ liệu. Để tồn tại mãi mãi.",
						"thai": "ในที่สุด Syntax ก็เปลี่ยนตัวเองให้กลายเป็นข้อมูล เพื่อดำรงอยู่ตลอดไป",
						"hindi": "Syntax ने आखिरकार खुद को भी डेटा में बदल दिया। हमेशा के लिए अस्तित्व में रहने के लिए।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "자기 자신을 데이터로 만들었다고?",
						"english": "Turned himself into data?",
						"japanese": "自分自身をデータにしたって？",
						"chinese": "把自己变成了数据？",
						"french": "Il s'est transformé en données ?",
						"spanish": "¿Se convirtió a sí mismo en datos?",
						"vietnamese": "Biến chính mình thành dữ liệu sao?",
						"thai": "เปลี่ยนตัวเองเป็นข้อมูล?",
						"hindi": "खुद को डेटा में बदल दिया?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "하지만 그 과정에서… 너무 많은 것을 잃었어. 자아의 파편만 남았지.",
						"english": "But in that process... too much was lost. Only fragments of self remained.",
						"japanese": "しかしその過程で…あまりにも多くを失った。自我の破片だけが残った。",
						"chinese": "但在这个过程中…失去了太多。只剩下自我的碎片。",
						"french": "Mais dans ce processus... trop de choses ont été perdues. Seuls des fragments de soi sont restés.",
						"spanish": "Pero en ese proceso... se perdió demasiado. Solo quedaron fragmentos del yo.",
						"vietnamese": "Nhưng trong quá trình đó... quá nhiều thứ đã mất đi. Chỉ còn lại những mảnh vỡ của bản ngã.",
						"thai": "แต่ในกระบวนการนั้น... สูญเสียไปมากเกินไป เหลือเพียงเศษเสี้ยวของตัวตน",
						"hindi": "पर उस प्रक्रिया में... बहुत कुछ खो गया। बस आत्म-खंड ही बचे।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "이 주변 네트워크에서 발견된 오래된 데이터 로그. '질서'와 '무질서'에 대한 강박적인 기록이 가득해.",
						"english": "An old data log found in this network. Filled with obsessive records of 'Order' and 'Disorder'.",
						"japanese": "この周辺ネットワークで見つかった古いデータログ。「秩序」と「無秩序」に関する強迫的な記録でいっぱいだ。",
						"chinese": "在此网络中发现的旧数据日志。充满了关于“秩序”和“无序”的强迫性记录。",
						"french": "Un vieux journal de données trouvé dans ce réseau. Rempli d'enregistrements obsessionnels sur l'« Ordre » et le « Désordre ».",
						"spanish": "Un antiguo registro de datos encontrado en esta red. Lleno de registros obsesivos sobre el 'Orden' y el 'Desorden'.",
						"vietnamese": "Một nhật ký dữ liệu cũ được tìm thấy trong mạng này. Chứa đầy những ghi chép ám ảnh về 'Trật tự' và 'Hỗn loạn'.",
						"thai": "บันทึกข้อมูลเก่าที่พบบนเครือข่ายนี้ เต็มไปด้วยบันทึกอันหมกมุ่นของ 'ระเบียบ' และ 'ความไม่เป็นระเบียบ'",
						"hindi": "इस नेटवर्क में मिला एक पुराना डेटा लॉग। 'व्यवस्था' और 'अव्यवस्था' के जुनूनी रिकॉर्ड से भरा हुआ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…그럼 Syntax는 지금 고통받고 있는 건가?",
						"english": "...So, is Syntax suffering now?",
						"japanese": "…じゃあ、Syntaxは今、苦しんでいるのか？",
						"chinese": "……那么，Syntax现在正在受苦吗？",
						"french": "…Alors, Syntax souffre-t-il maintenant ?",
						"spanish": "...Entonces, ¿Syntax está sufriendo ahora?",
						"vietnamese": "...Vậy, Syntax đang phải chịu đựng sao?",
						"thai": "...งั้น Syntax กำลังทนทุกข์อยู่ตอนนี้เหรอ?",
						"hindi": "...तो क्या Syntax अब पीड़ित है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "광기 속에서… 어쩌면.",
						"english": "In madness... perhaps.",
						"japanese": "狂気の中で…もしかしたら。",
						"chinese": "在疯狂中……也许吧。",
						"french": "Dans la folie... peut-être.",
						"spanish": "En la locura... quizás.",
						"vietnamese": "Trong sự điên loạn... có lẽ vậy.",
						"thai": "ในความบ้าคลั่ง... บางที",
						"hindi": "पागलपन में... शायद।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 연구를 멈춰야 해. 더 이상 비극이 반복되면 안 돼.",
						"english": "This research must stop. No more tragedies should repeat.",
						"japanese": "この研究を止めなければ。これ以上悲劇を繰り返してはならない。",
						"chinese": "这项研究必须停止。悲剧不能再重演了。",
						"french": "Cette recherche doit cesser. Plus aucune tragédie ne doit se répéter.",
						"spanish": "Esta investigación debe detenerse. No más tragedias deben repetirse.",
						"vietnamese": "Nghiên cứu này phải dừng lại. Không bi kịch nào được lặp lại nữa.",
						"thai": "งานวิจัยนี้ต้องหยุด ไม่ควรมีโศกนาฏกรรมซ้ำรอยอีกแล้ว",
						"hindi": "इस शोध को रुकना चाहिए। अब और त्रासदी नहीं दोहराई जानी चाहिए।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "멈춘다고… 해결될까?",
						"english": "Stopping it... will that solve anything?",
						"japanese": "止めても…解決するのか？",
						"chinese": "停止它……就能解决吗？",
						"french": "L'arrêter... cela résoudra-t-il quelque chose ?",
						"spanish": "¿Detenerlo... resolverá algo?",
						"vietnamese": "Dừng lại... liệu có giải quyết được gì không?",
						"thai": "หยุดแล้ว... จะแก้ปัญหาได้ไหม?",
						"hindi": "रोकने से... क्या हल होगा?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "적어도… 누군가는 멈춰야 해.",
						"english": "At least... someone has to stop it.",
						"japanese": "少なくとも…誰かが止めなければならない。",
						"chinese": "至少……总有人要阻止它。",
						"french": "Au moins... quelqu'un doit l'arrêter.",
						"spanish": "Al menos... alguien tiene que detenerlo.",
						"vietnamese": "Ít nhất... ai đó phải ngăn chặn nó.",
						"thai": "อย่างน้อย... ก็ต้องมีคนหยุดมัน",
						"hindi": "कम से कम... किसी को तो रोकना होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "…아니. 멈추지 마.",
						"english": "...No. Don't stop.",
						"japanese": "…いや。止めるな。",
						"chinese": "……不。别停止。",
						"french": "…Non. N'arrête pas.",
						"spanish": "...No. No te detengas.",
						"vietnamese": "...Không. Đừng dừng lại.",
						"thai": "...ไม่. อย่าหยุด",
						"hindi": "...नहीं। रुको मत।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "何だと？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไรนะ?",
						"hindi": "क्या?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "그는… 너를 기다리고 있을 거야. 너의 진실을.",
						"english": "He... will be waiting for you. For your truth.",
						"japanese": "彼は…君を待っているだろう。君の真実を。",
						"chinese": "他……会等着你。等着你的真相。",
						"french": "Il... t'attendra. Ta vérité.",
						"spanish": "Él... te estará esperando. Tu verdad.",
						"vietnamese": "Anh ta... sẽ đợi cậu. Đợi sự thật của cậu.",
						"thai": "เขา... จะรอคุณ. รอความจริงของคุณ",
						"hindi": "वह... तुम्हारा इंतजार कर रहा होगा। तुम्हारी सच्चाई का।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…무질서… 너도… 나처럼…",
						"english": "...Disorder... You too... like me...",
						"japanese": "...無秩序…お前も…私のように…",
						"chinese": "...无序…你也会…像我一样…",
						"french": "...Désordre... Toi aussi... comme moi...",
						"spanish": "...Desorden... Tú también... como yo...",
						"vietnamese": "...Hỗn loạn... Ngươi cũng... giống ta...",
						"thai": "...ความไร้ระเบียบ... เธอด้วย... เหมือนฉัน...",
						"hindi": "...अव्यवस्था… तुम भी… मेरी तरह…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Aún no ha terminado...",
						"vietnamese": "Vẫn... chưa kết thúc.",
						"thai": "ยัง...ไม่จบ",
						"hindi": "अभी… ख़त्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "데이터의 심연이 다시 한번 주인공을 집어삼켰다.",
						"english": "The abyss of data once again swallowed the protagonist.",
						"japanese": "データの深淵が再び主人公を飲み込んだ。",
						"chinese": "数据的深渊再次吞噬了主人公。",
						"french": "L'abîme des données a de nouveau englouti le protagoniste.",
						"spanish": "El abismo de datos volvió a engullir al protagonista.",
						"vietnamese": "Vực thẳm dữ liệu một lần nữa nuốt chửng nhân vật chính.",
						"thai": "ห้วงลึกของข้อมูลได้กลืนกินตัวเอกอีกครั้ง",
						"hindi": "डेटा के अथाह सागर ने एक बार फिर नायक को निगल लिया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 데이터 덩어리가 출현했다. 주변의 모든 정보가 빨려 들어간다.",
						"english": "A massive data mass has appeared. All surrounding information is being sucked in.",
						"japanese": "巨大なデータ塊が出現した。周囲のあらゆる情報が吸い込まれていく。",
						"chinese": "一个巨大的数据团块出现了。周围的所有信息都被吸了进去。",
						"french": "Une masse de données colossale est apparue. Toutes les informations environnantes sont aspirées.",
						"spanish": "Ha aparecido una enorme masa de datos. Toda la información circundante está siendo absorbida.",
						"vietnamese": "Một khối dữ liệu khổng lồ đã xuất hiện. Mọi thông tin xung quanh đều bị hút vào.",
						"thai": "มวลข้อมูลขนาดยักษ์ปรากฏขึ้น ข้อมูลทั้งหมดที่อยู่รอบๆ กำลังถูกดูดเข้าไป",
						"hindi": "एक विशाल डेटा समूह प्रकट हुआ है। आसपास की सारी जानकारी अंदर खींची जा रही है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…영원히. 이 질서는… 영원히.",
						"english": "...Forever. This order... forever.",
						"japanese": "...永遠に。この秩序は…永遠に。",
						"chinese": "...永远。这个秩序…永远。",
						"french": "...Pour toujours. Cet ordre... pour toujours.",
						"spanish": "...Para siempre. Este orden... para siempre.",
						"vietnamese": "...Mãi mãi. Trật tự này... mãi mãi.",
						"thai": "...ตลอดไป ระเบียบนี้... ตลอดไป",
						"hindi": "...हमेशा के लिए। यह व्यवस्था… हमेशा के लिए।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네 광기를 멈추겠어!",
						"english": "I'll stop your madness!",
						"japanese": "お前の狂気を止めてやる！",
						"chinese": "我会阻止你的疯狂！",
						"french": "J'arrêterai ta folie !",
						"spanish": "¡Detendré tu locura!",
						"vietnamese": "Tôi sẽ chấm dứt sự điên rồ của ngươi!",
						"thai": "ฉันจะหยุดความบ้าคลั่งของแก!",
						"hindi": "मैं तुम्हारी दीवानगी को रोकूंगा!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"content": {
						"korean": "…이해해야 해. 그가 왜 그랬는지.",
						"english": "...You must understand. Why he did it.",
						"japanese": "...理解しなければならない。彼がなぜそうしたのかを。",
						"chinese": "...你必须理解。他为什么这么做。",
						"french": "...Tu dois comprendre. Pourquoi il a fait ça.",
						"spanish": "...Debes entender. Por qué lo hizo.",
						"vietnamese": "...Ngươi phải hiểu. Tại sao anh ta lại làm vậy.",
						"thai": "...ต้องเข้าใจ ทำไมเขาถึงทำอย่างนั้น",
						"hindi": "...तुम्हें समझना होगा। उसने ऐसा क्यों किया।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "exit",
					"direction": "up",
					"speaker": "lin"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…파괴… 질서… 다시…",
						"english": "...Destruction... Order... Again...",
						"japanese": "...破壊…秩序…再び…",
						"chinese": "...破坏…秩序…再次…",
						"french": "...Destruction... Ordre... Encore...",
						"spanish": "...Destrucción... Orden... De nuevo...",
						"vietnamese": "...Phá hủy... Trật tự... Lại...",
						"thai": "...การทำลาย... ระเบียบ... อีกครั้ง...",
						"hindi": "...विनाश… व्यवस्था… फिर से…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "데이터 덩어리는 힘없이 무너졌다. 그 안에서 희미한 빛이 섬광처럼 터졌다.",
						"english": "The mass of data collapsed powerlessly. A faint light burst within it like a flash.",
						"japanese": "データ塊は力なく崩れ落ちた。その中から、かすかな光が閃光のように弾けた。",
						"chinese": "数据团无力地崩塌了。一道微弱的光芒像闪电一样从中迸发。",
						"french": "La masse de données s'est effondrée, impuissante. Une faible lumière a jailli en son sein comme un éclair.",
						"spanish": "La masa de datos se derrumbó sin poder. Una luz tenue estalló en su interior como un destello.",
						"vietnamese": "Khối dữ liệu sụp đổ không chút sức lực. Một luồng sáng yếu ớt bùng lên như một tia chớp bên trong.",
						"thai": "ก้อนข้อมูลพังทลายลงอย่างไร้เรี่ยวแรง แสงจางๆ พลุ่งขึ้นมาภายในเหมือนแสงวาบ",
						"hindi": "डेटा का ढेर बेजान होकर ढह गया। उसके भीतर एक धुंधली रोशनी चमक की तरह फूटी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…끝났나?",
						"english": "...Is it over?",
						"japanese": "...終わったのか？",
						"chinese": "...结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "...¿Se acabó?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 시스템은 잠시 안정되었다. 그러나 린의 마지막 말은 의문을 남겼다.",
						"english": "The city's system stabilized for a moment. But Lin's last words left a question.",
						"japanese": "都市のシステムは一時的に安定した。しかし、リンの最後の言葉は疑問を残した。",
						"chinese": "城市的系统暂时稳定了。然而，林的最后一句却留下了疑问。",
						"french": "Le système de la ville s'est stabilisé un instant. Mais les derniers mots de Lin laissèrent une question en suspens.",
						"spanish": "El sistema de la ciudad se estabilizó por un momento. Pero las últimas palabras de Lin dejaron una pregunta.",
						"vietnamese": "Hệ thống thành phố tạm thời ổn định. Nhưng những lời cuối của Lin lại để lại một câu hỏi.",
						"thai": "ระบบของเมืองกลับมาเสถียรชั่วขณะ แต่คำพูดสุดท้ายของลินทิ้งปริศนาไว้",
						"hindi": "शहर की प्रणाली थोड़ी देर के लिए स्थिर हो गई। लेकिन लिन के आखिरी शब्दों ने एक सवाल छोड़ दिया।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "‘그는… 너를 기다리고 있을 거야. 너의 진실을.’",
						"english": "'He... will be waiting for you. For your truth.'",
						"japanese": "「彼は…君を待っているだろう。君の真実を。」",
						"chinese": "‘他…会在等你。等你的真相。’",
						"french": "« Il... t'attendra. Pour ta vérité. »",
						"spanish": "«Él... te estará esperando. Tu verdad.»",
						"vietnamese": "'Anh ta... sẽ đợi ngươi. Đợi sự thật của ngươi.'",
						"thai": "'เขา... จะรอเธออยู่ รอความจริงของเธอ'",
						"hindi": "‘वह… तुम्हारा इंतजार कर रहा होगा। तुम्हारी सच्चाई का।’"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이것이 끝이 아님을, 주인공은 직감했다.",
						"english": "The protagonist instinctively knew this was not the end.",
						"japanese": "主人公は、これが終わりではないと直感した。",
						"chinese": "主角直觉地感到，这并非结局。",
						"french": "Le protagoniste sentit instinctivement que ce n'était pas la fin.",
						"spanish": "El protagonista intuyó que este no era el final.",
						"vietnamese": "Nhân vật chính linh cảm rằng đây không phải là kết thúc.",
						"thai": "ตัวเอกสัมผัสได้ทันทีว่านี่ไม่ใช่จุดสิ้นสุด",
						"hindi": "नायक ने सहज रूप से महसूस किया कि यह अंत नहीं है।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"Syntax의 꿈은 '영원한 정보'였다.",
			"모든 것을 담고, 모든 것을 보존하려는 숭고한 열망.",
			"그러나 그 꿈은 뒤틀려, 도시를 잠식하는 광기가 되었다.",
			"죽은 줄 알았던 과거의 증인, 린이 나타나 진실을 말한다.",
			"그리고 그 진실은, 영원히 잊혀야 할 비극의 메아리였다."
		],
		"english": [
			"Syntax's dream was 'eternal information'.",
			"A noble desire to contain and preserve everything.",
			"But that dream twisted, becoming a madness consuming the city.",
			"Lynn, a witness from the past thought dead, appears to reveal the truth.",
			"And that truth was the echo of a tragedy that should be forgotten forever."
		],
		"japanese": [
			"Syntaxの夢は「永遠の情報」だった。",
			"全てを包み込み、全てを保存しようとする崇高な願望。",
			"しかし、その夢は歪み、都市を侵食する狂気と化した。",
			"死んだと思われていた過去の証人、リンが現れ、真実を語る。",
			"そしてその真実は、永遠に忘れ去られるべき悲劇の残響だった。"
		],
		"chinese": [
			"Syntax的梦想是‘永恒的信息’。",
			"一个崇高的愿望，渴望包含并保存一切。",
			"然而，那个梦想扭曲了，变成了一种吞噬城市的疯狂。",
			"本以为已死的往日证人，琳，现身道出真相。",
			"而那个真相，是本应永远被遗忘的悲剧回响。"
		],
		"french": [
			"Le rêve de Syntax était 'l'information éternelle'.",
			"Un noble désir de tout contenir et de tout préserver.",
			"Mais ce rêve s'est tordu, devenant une folie dévorant la ville.",
			"Lynn, un témoin du passé que l'on croyait mort, apparaît pour révéler la vérité.",
			"Et cette vérité était l'écho d'une tragédie qui devait être oubliée à jamais."
		],
		"spanish": [
			"El sueño de Syntax era la 'información eterna'.",
			"Un noble deseo de contener y preservar todo.",
			"Pero ese sueño se retorció, convirtiéndose en una locura que consume la ciudad.",
			"Lynn, un testigo del pasado que se creía muerto, aparece para revelar la verdad.",
			"Y esa verdad era el eco de una tragedia que debía ser olvidada para siempre."
		],
		"vietnamese": [
			"Giấc mơ của Syntax là 'thông tin vĩnh cửu'.",
			"Một khao khát cao cả: chứa đựng và bảo tồn mọi thứ.",
			"Nhưng giấc mơ đó đã biến dạng, trở thành sự điên loạn nuốt chửng thành phố.",
			"Lynn, một nhân chứng từ quá khứ tưởng chừng đã chết, xuất hiện để nói lên sự thật.",
			"Và sự thật đó, là tiếng vọng của một bi kịch lẽ ra phải bị lãng quên vĩnh viễn."
		],
		"thai": [
			"ความฝันของ Syntax คือ 'ข้อมูลนิรันดร์'",
			"ความปรารถนาอันสูงส่งที่จะรวบรวมและรักษาสรรพสิ่ง",
			"แต่ความฝันนั้นบิดเบี้ยว กลายเป็นความบ้าคลั่งที่กลืนกินเมือง",
			"ลินน์ พยานจากอดีตที่คิดว่าตายไปแล้ว ปรากฏตัวเพื่อบอกความจริง",
			"และความจริงนั้นคือเสียงสะท้อนของโศกนาฏกรรมที่ควรถูกลืมเลือนไปตลอดกาล"
		],
		"hindi": [
			"सिंटैक्स का सपना 'शाश्वत जानकारी' था।",
			"सब कुछ समाहित करने और संरक्षित करने की एक महान इच्छा।",
			"लेकिन वह सपना विकृत हो गया, शहर को निगलने वाला एक पागलपन बन गया।",
			"अतीत की एक गवाह, लिन, जिसे मृत मान लिया गया था, सच्चाई बताने के लिए प्रकट होती है।",
			"और वह सच्चाई एक ऐसी त्रासदी की गूँज थी जिसे हमेशा के लिए भुला देना चाहिए था।"
		]
	}
} as const;
