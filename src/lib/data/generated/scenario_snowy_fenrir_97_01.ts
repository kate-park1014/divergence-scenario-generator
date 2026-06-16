export const scenario_snowy_fenrir_97_01 = {
	"scenario_id": "snowy_fenrir_97_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "결정적 일격의 순간. 굶주림의 근원인 늑대가 눈앞에 있었다.",
						"english": "The moment of the decisive blow. The wolf, source of the hunger, was before me.",
						"japanese": "決定的な一撃の瞬間。飢えの根源である狼が目の前にいた。",
						"chinese": "决定性一击的瞬间。饥饿之源的狼，就在眼前。",
						"french": "L'instant du coup décisif. Le loup, source de la faim, était devant moi.",
						"spanish": "El momento del golpe decisivo. El lobo, origen de la hambruna, estaba ante mí.",
						"vietnamese": "Khoảnh khắc của đòn quyết định. Con sói, cội nguồn của sự đói khát, đang ở trước mặt.",
						"thai": "ชั่วขณะของการจู่โจมครั้งสุดท้าย หมาป่า ต้นกำเนิดแห่งความหิวโหย อยู่ตรงหน้า",
						"hindi": "निर्णायक वार का क्षण। भूख का स्रोत, भेड़िया, मेरे सामने था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "드디어… 여기였군.",
						"english": "Finally... this was it.",
						"japanese": "ついに… ここだったか。",
						"chinese": "终于……就是这里了。",
						"french": "Enfin… c'était ici.",
						"spanish": "Finalmente... era aquí.",
						"vietnamese": "Cuối cùng... là ở đây.",
						"thai": "ในที่สุด... ก็ที่นี่สินะ",
						"hindi": "अंततः... यह यहीं था।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 동공… 여전히 텅 비어있네요.",
						"english": "Those pupils... still empty.",
						"japanese": "あの瞳… まだ虚ろですね。",
						"chinese": "那双眼睛……依然空洞。",
						"french": "Ces pupilles… toujours vides.",
						"spanish": "Esas pupilas… todavía vacías.",
						"vietnamese": "Đôi mắt đó... vẫn trống rỗng.",
						"thai": "ดวงตานั้น... ยังคงว่างเปล่า",
						"hindi": "वे आँखें... अभी भी खाली हैं।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "…何だと？",
						"chinese": "……你说什么？",
						"french": "…Quoi ?",
						"spanish": "¿...Qué?",
						"vietnamese": "…Cái gì?",
						"thai": "...ว่าไงนะ?",
						"hindi": "...क्या?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "오랜 전설에 따르면… 굶주림은 본질 그 자체라고.",
						"english": "According to ancient legends... hunger is its very essence.",
						"japanese": "古き伝説によれば… 飢えこそが本質そのものだとか。",
						"chinese": "根据古老传说……饥饿即是其本质。",
						"french": "Selon d'anciennes légendes… la faim est son essence même.",
						"spanish": "Según antiguas leyendas… el hambre es su esencia misma.",
						"vietnamese": "Theo truyền thuyết cổ xưa... đói khát chính là bản chất của nó.",
						"thai": "ตามตำนานเก่าแก่... ความหิวโหยคือแก่นแท้ของมัน",
						"hindi": "प्राचीन किंवदंतियों के अनुसार... भूख ही उसका मूल सार है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이름 없는 무리들의 마지막 신음이, 여기에… 기록되어 있어요.",
						"english": "The last whimpers of the nameless hordes are... recorded here.",
						"japanese": "名もなき群れの最後の呻きが、ここに… 記録されています。",
						"chinese": "无名之辈的最后呻吟，在这里……被记录下来了。",
						"french": "Les derniers gémissements des hordes sans nom sont… enregistrés ici.",
						"spanish": "Los últimos quejidos de las hordas sin nombre están… registrados aquí.",
						"vietnamese": "Những tiếng rên rỉ cuối cùng của bầy vô danh… được ghi lại ở đây.",
						"thai": "เสียงครวญครางสุดท้ายของฝูงชนไร้นาม... ถูกบันทึกไว้ที่นี่",
						"hindi": "अनाम गिरोहों की आखिरी कराहें, यहाँ... दर्ज हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서, 이 녀석을 죽이면 끝나는 거야?",
						"english": "So, if we kill this one, it ends?",
						"japanese": "じゃあ、こいつを殺せば終わりなのか？",
						"chinese": "所以，杀了这家伙就结束了？",
						"french": "Alors, si on le tue, c'est fini ?",
						"spanish": "¿Entonces, si matamos a este, se acaba?",
						"vietnamese": "Vậy, giết nó là xong à?",
						"thai": "งั้น, ถ้าฆ่าเจ้านี่ได้ก็จบใช่ไหม?",
						"hindi": "तो, अगर इसे मार दें, तो सब ख़त्म हो जाएगा?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…그건 아무도 몰라요. 역사는 단지… 굶주림을 기록할 뿐.",
						"english": "...No one knows. History merely... records hunger.",
						"japanese": "…それは誰も知りません。歴史はただ…飢えを記録するだけ。",
						"chinese": "…没人知道。历史只是…记录着饥饿。",
						"french": "...Personne ne sait. L'histoire ne fait que... enregistrer la faim.",
						"spanish": "...Nadie lo sabe. La historia solo... registra el hambre.",
						"vietnamese": "...Không ai biết. Lịch sử chỉ... ghi lại sự đói khát.",
						"thai": "...ไม่มีใครรู้ ประวัติศาสตร์แค่...บันทึกความหิวโหยเท่านั้น",
						"hindi": "...कोई नहीं जानता। इतिहास बस... भूख को दर्ज करता है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "과거에도 수많은 ‘늑대’가 있었다고 해요.",
						"english": "They say there were countless 'wolves' in the past too.",
						"japanese": "過去にも数えきれないほどの『狼』がいたそうです。",
						"chinese": "据说过去也有无数的‘狼’。",
						"french": "On dit qu'il y a eu d'innombrables 'loups' par le passé aussi.",
						"spanish": "Dicen que en el pasado también hubo incontables 'lobos'.",
						"vietnamese": "Nghe nói trong quá khứ cũng có vô số 'sói'.",
						"thai": "ว่ากันว่าในอดีตก็มี 'หมาป่า' นับไม่ถ้วนเช่นกัน",
						"hindi": "कहते हैं, अतीत में भी अनगिनत 'भेड़िये' थे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "수많은 늑대…?",
						"english": "Countless wolves...?",
						"japanese": "数えきれないほどの狼…？",
						"chinese": "无数的狼…？",
						"french": "D'innombrables loups... ?",
						"spanish": "¿Incontables lobos...?",
						"vietnamese": "Vô số sói...?",
						"thai": "หมาป่ามากมาย...?",
						"hindi": "अनगिनत भेड़िये...?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그들은 모두 굶주림의 화신이었죠. 끊임없이 채워지지 않는.",
						"english": "They were all incarnations of hunger. Never-ending, never satisfied.",
						"japanese": "彼らは皆、満たされることのない飢えの化身でした。",
						"chinese": "它们都是饥饿的化身。永无止境，无法满足。",
						"french": "Ils étaient tous des incarnations de la faim. Sans fin, jamais satisfaits.",
						"spanish": "Todos eran encarnaciones del hambre. Interminable, insaciable.",
						"vietnamese": "Chúng đều là hiện thân của sự đói khát. Không ngừng, không bao giờ được thỏa mãn.",
						"thai": "พวกมันล้วนเป็นร่างอวตารของความหิวโหย ไม่สิ้นสุด ไม่เคยพอ",
						"hindi": "वे सब भूख के अवतार थे। कभी न खत्म होने वाले, कभी संतुष्ट न होने वाले।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서, 우리는… 이 끝없는 싸움을 해야 하는 거야?",
						"english": "So, we... have to fight this endless battle?",
						"japanese": "じゃあ、私たちは…この終わりのない戦いをしなければならないのか？",
						"chinese": "所以，我们…必须打这场永无止境的仗吗？",
						"french": "Alors, nous... devons mener cette bataille sans fin ?",
						"spanish": "¿Entonces, nosotros... tenemos que librar esta batalla interminable?",
						"vietnamese": "Vậy, chúng ta... phải chiến đấu trận chiến không hồi kết này sao?",
						"thai": "งั้น, เรา... ต้องสู้ศึกที่ไม่รู้จบนี้เหรอ?",
						"hindi": "तो, हमें... यह अंतहीन लड़ाई लड़नी होगी?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…그 질문은 저 늑대에게 직접 물어봐야 할 것 같아요.",
						"english": "...I think you'll have to ask that wolf yourself.",
						"japanese": "…その質問は、あの狼に直接聞いてみるべきだと思います。",
						"chinese": "…那个问题，我想你得亲自去问那只狼。",
						"french": "...Je pense que vous devriez poser cette question directement à ce loup.",
						"spanish": "...Creo que deberías preguntarle a ese lobo directamente.",
						"vietnamese": "...Tôi nghĩ bạn phải tự hỏi con sói đó thôi.",
						"thai": "...ฉันคิดว่าคุณคงต้องไปถามหมาป่าตัวนั้นเอง",
						"hindi": "...मुझे लगता है कि आपको वह सवाल उस भेड़िये से खुद पूछना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						4
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이곳의 룬은… ‘끝은 시작’이라고 말하고 있어요.",
						"english": "The runes here... say 'the end is the beginning'.",
						"japanese": "ここのルーンは…『終わりは始まり』だと告げています。",
						"chinese": "这里的符文…说‘终结是开始’。",
						"french": "Les runes ici... disent que 'la fin est le début'.",
						"spanish": "Las runas aquí... dicen 'el fin es el principio'.",
						"vietnamese": "Các rune ở đây... nói 'kết thúc là bắt đầu'.",
						"thai": "รูนที่นี่... บอกว่า 'จุดจบคือการเริ่มต้น'",
						"hindi": "यहां के runes... कहते हैं 'अंत ही आरंभ है'।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼. 그럼 우리가 싸우는 건… 의미가 없는 건가?",
						"english": "Nonsense. So, our fight... is meaningless?",
						"japanese": "馬鹿な。じゃあ、私たちが戦うのは…意味がないのか？",
						"chinese": "胡说。那么我们战斗…是没有意义的吗？",
						"french": "N'importe quoi. Alors, notre combat... est-il sans signification ?",
						"spanish": "Tonterías. Entonces, ¿nuestra lucha... no tiene sentido?",
						"vietnamese": "Vô lý. Vậy, cuộc chiến của chúng ta... là vô nghĩa sao?",
						"thai": "ไร้สาระ งั้น, การต่อสู้ของเรา... ไม่มีความหมายเหรอ?",
						"hindi": "बकवास। तो, हमारी लड़ाई... क्या व्यर्थ है?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아뇨. 의미가 없을 리 없어요. 우리는 진실을 마주하고 있으니까요.",
						"english": "No. It can't be meaningless. Because we are facing the truth.",
						"japanese": "いいえ。意味がないはずがありません。私たちは真実と向き合っているのですから。",
						"chinese": "不。不可能是没有意义的。因为我们正面对着真相。",
						"french": "Non. Ça ne peut pas être sans signification. Parce que nous faisons face à la vérité.",
						"spanish": "No. No puede ser sin sentido. Porque estamos enfrentando la verdad.",
						"vietnamese": "Không. Không thể vô nghĩa được. Bởi vì chúng ta đang đối mặt với sự thật.",
						"thai": "ไม่หรอก มันจะไม่มีความหมายไม่ได้ เพราะเรากำลังเผชิญหน้ากับความจริง",
						"hindi": "नहीं। यह व्यर्थ नहीं हो सकता। क्योंकि हम सच का सामना कर रहे हैं।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장. 아무것도 모르겠어. 그냥… 부수자.",
						"english": "Damn it. I don't get it. Let's just… break it.",
						"japanese": "くそっ。何も分からない。もう…壊そう。",
						"chinese": "该死。我什么都不知道。干脆…毁了它吧。",
						"french": "Zut. Je n'y comprends rien. Autant… le casser.",
						"spanish": "Maldita sea. No entiendo nada. Simplemente… rompámoslo.",
						"vietnamese": "Chết tiệt. Tôi không hiểu gì cả. Cứ… phá nó đi.",
						"thai": "บ้าเอ๊ย. ไม่รู้อะไรเลย. แค่…ทำลายมันซะ.",
						"hindi": "लानत है। मुझे कुछ समझ नहीं आ रहा। बस… इसे तोड़ दो。"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하하… 결국 너희도… 굶주림을 채울 재료가 될 뿐이다.",
						"english": "Hah hah... In the end, you'll merely be ingredients to sate my hunger.",
						"japanese": "ハハ…結局、お前たちも…私の飢えを満たす餌に過ぎぬ。",
						"chinese": "哈哈… 你们终究… 只是我果腹的材料。",
						"french": "Haha... Au final, vous ne serez que des ingrédients pour ma faim.",
						"spanish": "Jaja... Al final, solo serán ingredientes para mi hambre.",
						"vietnamese": "Haha... Các ngươi rồi cũng chỉ là nguyên liệu thỏa mãn cơn đói của ta.",
						"thai": "ฮ่าฮ่า... พวกเจ้าก็แค่ส่วนผสมเติมเต็มความหิวของข้า.",
						"hindi": "हाहा... तुम भी मेरी भूख मिटाने की सामग्री बनोगे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 우린… 반드시 너를 막을 거야.",
						"english": "Damn it... It's not over yet. We'll... stop you!",
						"japanese": "くそ…まだだ。我々は…必ずお前を止める！",
						"chinese": "可恶… 还没完。我们… 必将阻止你。",
						"french": "Maudit... Ce n'est pas fini. Nous t'arrêterons !",
						"spanish": "¡Maldita sea! No ha terminado. ¡Te detendremos!",
						"vietnamese": "Khốn kiếp! Chưa xong đâu. Bọn ta nhất định sẽ ngăn ngươi!",
						"thai": "บ้าเอ๊ย! ยังไม่จบ. พวกเราจะหยุดแกให้ได้!",
						"hindi": "धत् तेरे की! अभी खत्म नहीं हुआ। हम तुम्हें रोकेंगे!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "마지막 방. 모든 굶주림의 근원, 늑대가 모습을 드러냈다.",
						"english": "The final room. The wolf, source of all hunger, revealed itself.",
						"japanese": "最後の部屋。全ての飢えの根源である狼が姿を現した。",
						"chinese": "最后一间房。所有饥饿的根源，狼露出了真面目。",
						"french": "La dernière pièce. Le loup, source de toute faim, s'est révélé.",
						"spanish": "La última sala. El lobo, la fuente de toda el hambre, se reveló.",
						"vietnamese": "Căn phòng cuối cùng. Con sói, nguồn gốc của mọi sự đói khát, đã lộ diện.",
						"thai": "ห้องสุดท้าย. หมาป่า ต้นตอแห่งความหิวโหยทั้งหมด ได้เผยโฉมออกมาแล้ว.",
						"hindi": "आखिरी कमरा। सभी भूख का स्रोत, भेड़िया प्रकट हुआ।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…와라. 끝없는 굶주림을 막을 수 있다면.",
						"english": "…Come. If you can stop this endless hunger.",
						"japanese": "…来い。終わらない飢えを止められるのなら。",
						"chinese": "……来吧。如果你能阻止这无尽的饥饿。",
						"french": "...Venez. Si vous pouvez arrêter cette faim sans fin.",
						"spanish": "...Ven. Si puedes detener esta hambre interminable.",
						"vietnamese": "...Lại đây. Nếu ngươi có thể ngăn chặn cơn đói khát vô tận này.",
						"thai": "...มาเลย. ถ้าเจ้าหยุดความหิวโหยไม่สิ้นสุดนี้ได้.",
						"hindi": "...आओ। अगर तुम इस अंतहीन भूख को रोक सकते हो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "말도 안 돼… 이 녀석의 동공이… 더 깊어졌어.",
						"english": "No way… Its pupils… have deepened.",
						"japanese": "まさか…こいつの瞳孔が…もっと深くなってる。",
						"chinese": "不可能…这家伙的瞳孔…变得更深了。",
						"french": "Impossible… Ses pupilles… se sont approfondies.",
						"spanish": "No puede ser… Sus pupilas… se han vuelto más profundas.",
						"vietnamese": "Không thể nào… Đồng tử của nó… đã sâu hơn rồi.",
						"thai": "ไม่จริงน่า... รูม่านตาของมัน... ลึกขึ้นอีกแล้ว.",
						"hindi": "असंभव… इसकी पुतलियाँ… और गहरी हो गई हैं।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "저 텅 빈 동공이… 모든 것을 빨아들이고 있어요.",
						"english": "Those empty pupils… are sucking everything in.",
						"japanese": "あの虚ろな瞳孔が…全てを吸い込んでいる。",
						"chinese": "那空洞的瞳孔…正在吞噬一切。",
						"french": "Ces pupilles vides… aspirent tout.",
						"spanish": "Esas pupilas vacías… lo están absorbiendo todo.",
						"vietnamese": "Đồng tử trống rỗng đó… đang hút mọi thứ vào.",
						"thai": "รูม่านตาที่ว่างเปล่าคู่นั้น... กำลังดูดทุกสิ่งเข้าไป.",
						"hindi": "वे खाली पुतलियाँ… सब कुछ अंदर खींच रही हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 저항도… 결국 나를 채울 뿐.",
						"english": "Even your resistance… will only fill me in the end.",
						"japanese": "お前たちの抵抗も…結局は私を満たすだけだ。",
						"chinese": "你们的反抗…最终也只会让我更饱足。",
						"french": "Votre résistance aussi… ne fera que me rassasier.",
						"spanish": "Vuestra resistencia… al final solo me llenará.",
						"vietnamese": "Sự phản kháng của các ngươi… cuối cùng cũng chỉ lấp đầy ta mà thôi.",
						"thai": "การต่อต้านของพวกเจ้า... สุดท้ายก็แค่เติมเต็มข้าเท่านั้น.",
						"hindi": "तुम्हारा प्रतिरोध भी… अंत में मुझे ही भर देगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 끝없는 굶주림은… 멈추지 않아…!",
						"english": "Ugh… This endless hunger… it won't stop…!",
						"japanese": "くぅ…終わりのない飢えは…止まらない…！",
						"chinese": "呃啊…这无尽的饥饿…不会停止…！",
						"french": "Ugh… Cette faim sans fin… ne s'arrêtera pas… !",
						"spanish": "Ugh… Esta hambre interminable… ¡no se detendrá…!",
						"vietnamese": "Khụ… cơn đói khát vô tận này… không dừng lại…!",
						"thai": "อึก… ความหิวโหยไม่สิ้นสุดนี้… จะไม่หยุด…!",
						"hindi": "उफ़… यह अंतहीन भूख… रुकती नहीं…!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야! 쓰러뜨렸는데…!",
						"english": "What are you talking about! We defeated it…!",
						"japanese": "何を言ってるんだ！倒したのに…！",
						"chinese": "胡说八道！明明已经打倒了…！",
						"french": "Qu'est-ce que tu racontes ! On l'a vaincu… !",
						"spanish": "¡Qué tonterías dices! ¡Si lo hemos derrotado…!",
						"vietnamese": "Ngươi nói gì vậy! Đã đánh bại nó rồi mà…!",
						"thai": "พูดอะไรน่ะ! ทั้งที่เราจัดการมันได้แล้วแท้ๆ...!",
						"hindi": "यह क्या बकवास है! हमने इसे हरा दिया है…!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "사체들이… 다시 늑대를 향해 들썩이고 있어요.",
						"english": "The corpses… are stirring towards the wolf again.",
						"japanese": "死体が…再び狼に向かって蠢いている。",
						"chinese": "尸体们…又开始朝着狼涌动了。",
						"french": "Les cadavres… s'agitent à nouveau vers le loup.",
						"spanish": "Los cadáveres… se están agitando de nuevo hacia el lobo.",
						"vietnamese": "Các xác chết… lại đang lay động về phía con sói.",
						"thai": "พวกซากศพ... กำลังขยับไปทางหมาป่าอีกแล้ว.",
						"hindi": "शव… फिर से भेड़िये की ओर हिलने लगे हैं।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "늑대는 무너졌지만, 굶주림은 끝나지 않았다. 더 거대한 형상이 솟아날 준비를 하고 있었다.",
						"english": "The wolf fell, but the hunger didn't end. A larger form was preparing to emerge.",
						"japanese": "狼は倒れたが、飢えは終わらなかった。さらに巨大な姿が湧き出ようとしていた。",
						"chinese": "狼倒下了，但饥饿并未结束。一个更巨大的形体正准备浮现。",
						"french": "Le loup est tombé, mais la faim n'a pas pris fin. Une forme encore plus gigantesque s'apprêtait à émerger.",
						"spanish": "El lobo cayó, pero el hambre no terminó. Una forma aún más grande se estaba preparando para emerger.",
						"vietnamese": "Con sói đã ngã xuống, nhưng cơn đói khát vẫn chưa kết thúc. Một hình thù khổng lồ hơn đang chuẩn bị trỗi dậy.",
						"thai": "หมาป่าล้มลง แต่ความหิวโหยยังไม่สิ้นสุด. ร่างที่ใหญ่กว่ากำลังเตรียมผุดขึ้นมา.",
						"hindi": "भेड़िया गिर गया, लेकिन भूख खत्म नहीं हुई। एक और विशाल आकृति उभरने की तैयारी कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"마침내, 짐승의 앞에 섰다.",
			"모든 것을 끝낼 결정적 일격.",
			"그러나 텅 빈 동공은, 여전히 무언가를 갈구했다.",
			"이 굶주림의 끝은 어디인가?"
		],
		"english": [
			"Finally, I stood before the beast.",
			"The decisive blow that would end everything.",
			"Yet, the empty pupils still craved something.",
			"Where does this hunger end?"
		],
		"japanese": [
			"ついに、獣の前に立った。",
			"すべてを終わらせる、決定的な一撃。",
			"しかし、虚ろな瞳は、いまだ何かを渇望していた。",
			"この飢えの終わりはどこにあるのか？"
		],
		"chinese": [
			"终于，我站在了野兽面前。",
			"了结一切的决定性一击。",
			"然而，空洞的瞳孔，仍在渴望着什么。",
			"这饥饿的尽头在哪里？"
		],
		"french": [
			"Enfin, je me tenais devant la bête.",
			"Le coup décisif qui mettrait fin à tout.",
			"Pourtant, ses pupilles vides désiraient toujours quelque chose.",
			"Où se termine cette faim ?"
		],
		"spanish": [
			"Finalmente, me paré frente a la bestia.",
			"El golpe decisivo que acabaría con todo.",
			"Pero sus pupilas vacías, aún anhelaban algo.",
			"¿Dónde termina esta hambruna?"
		],
		"vietnamese": [
			"Cuối cùng, tôi đã đứng trước con thú.",
			"Đòn quyết định sẽ kết thúc mọi thứ.",
			"Tuy nhiên, đôi mắt trống rỗng vẫn khao khát điều gì đó.",
			"Cơn đói này sẽ kết thúc ở đâu?"
		],
		"thai": [
			"ในที่สุด ข้าก็ยืนอยู่เบื้องหน้าอสูร",
			"การโจมตีครั้งสุดท้ายที่จะยุติทุกสิ่ง",
			"ทว่าดวงตาที่ว่างเปล่านั้น ยังคงโหยหาบางสิ่ง",
			"ความหิวโหยนี้จะสิ้นสุดลงที่ใด?"
		],
		"hindi": [
			"अंततः, मैं जानवर के सामने खड़ा था।",
			"सब कुछ खत्म करने वाला निर्णायक वार।",
			"परन्तु, खाली आँखें अब भी कुछ तलाश रही थीं।",
			"इस भूख का अंत कहाँ है?"
		]
	}
} as const;
