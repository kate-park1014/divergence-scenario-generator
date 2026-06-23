export const scenario_snowy_ursusglacius_74_03 = {
	"scenario_id": "snowy_ursusglacius_74_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 펼쳐진 설원. 저 멀리 거대한 빙하가 보였다.",
						"english": "An endless snowy field. A colossal glacier was visible in the distance.",
						"japanese": "果てしなく広がる雪原。遠くに巨大な氷河が見えた。",
						"chinese": "一望无际的雪原。远处可见巨大的冰川。",
						"french": "Un champ de neige sans fin. Un glacier colossal était visible au loin.",
						"spanish": "Un campo de nieve interminable. Un glaciar colosal era visible a lo lejos.",
						"vietnamese": "Cánh đồng tuyết vô tận. Một tảng băng khổng lồ hiện ra từ xa.",
						"thai": "ทุ่งหิมะอันกว้างใหญ่ไพศาล ธารน้ำแข็งขนาดมหึมาปรากฏให้เห็นแต่ไกล",
						"hindi": "एक अंतहीन बर्फीला मैदान। दूर एक विशाल ग्लेशियर दिखाई दे रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "빙하가… 움직이고 있어? 엄청난 속도로 확장되고 있는데?",
						"english": "The glacier... it's moving? And expanding at an incredible speed?",
						"japanese": "氷河が…動いている？とてつもない速さで拡大しているだと？",
						"chinese": "冰川……它在动？而且以惊人的速度扩张着？",
						"french": "Le glacier... il bouge ? Et s'étend à une vitesse incroyable ?",
						"spanish": "El glaciar... ¿se está moviendo? ¿Y se expande a una velocidad increíble?",
						"vietnamese": "Tảng băng… nó đang di chuyển? Và mở rộng với tốc độ đáng kinh ngạc?",
						"thai": "ธารน้ำแข็ง… กำลังเคลื่อนที่? และขยายตัวด้วยความเร็วที่ไม่น่าเชื่อ?",
						"hindi": "ग्लेशियर... वह हिल रहा है? और अविश्वसनीय गति से फैल रहा है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "안 돼…! 이건 단순한 자연재해가 아니야!",
						"english": "No...! This isn't just a natural disaster!",
						"japanese": "だめだ…！これは単なる自然災害じゃない！",
						"chinese": "不……！这不是简单的自然灾害！",
						"french": "Non...! Ce n'est pas seulement une catastrophe naturelle !",
						"spanish": "¡No...! ¡Esto no es solo un desastre natural!",
						"vietnamese": "Không…! Đây không chỉ là một thảm họa thiên nhiên!",
						"thai": "ไม่นะ...! นี่ไม่ใช่แค่ภัยธรรมชาติ!",
						"hindi": "नहीं...! यह सिर्फ एक प्राकृतिक आपदा नहीं है!"
					},
					"speaker": "inka",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "느껴져? 고대 족장의 영혼이… 저 빙하 안에 갇혀서 울부짖고 있어!",
						"english": "Do you feel it? The ancient chieftain's soul... it's trapped inside that glacier, crying out!",
						"japanese": "感じるか？古の族長の魂が…あの氷河の中に囚われて、叫び苦しんでいる！",
						"chinese": "你感觉到了吗？古老酋长的灵魂……它被困在那冰川里，正在哭喊！",
						"french": "Le sens-tu ? L'âme de l'ancien chef... elle est piégée dans ce glacier, et crie !",
						"spanish": "¿Lo sientes? El alma del antiguo cacique... ¡está atrapada dentro de ese glaciar, gritando!",
						"vietnamese": "Ngươi có cảm nhận được không? Linh hồn của tộc trưởng cổ đại… nó bị giam cầm bên trong tảng băng đó, đang gào thét!",
						"thai": "เจ้าสัมผัสได้ไหม? วิญญาณของหัวหน้าเผ่าโบราณ… ถูกขังอยู่ในธารน้ำแข็งนั้น ร่ำไห้อยู่!",
						"hindi": "क्या तुम्हें महसूस होता है? प्राचीन सरदार की आत्मा... वह उस ग्लेशियर के अंदर फंसी हुई है, चीख रही है!"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "족장의 영혼? 그게 이 빙하를 움직인다고?",
						"english": "The chieftain's soul? That's moving this glacier?",
						"japanese": "族長の魂？それがこの氷河を動かしているだと？",
						"chinese": "酋长的灵魂？是它在移动这冰川？",
						"french": "L'âme du chef ? C'est ça qui fait bouger ce glacier ?",
						"spanish": "¿El alma del cacique? ¿Eso está moviendo este glaciar?",
						"vietnamese": "Linh hồn tộc trưởng? Nó đang di chuyển tảng băng này ư?",
						"thai": "วิญญาณของหัวหน้าเผ่า? นั่นคือสิ่งที่ทำให้ธารน้ำแข็งนี้เคลื่อนที่หรือ?",
						"hindi": "सरदार की आत्मा? क्या वह इस ग्लेशियर को हिला रही है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "inka",
					"content": {
						"korean": "거대한 시스템이 족장의 분노를 이용하고 있어…! 시간이 없어, 빨리 움직여야 해!",
						"english": "A colossal system is exploiting the chieftain's rage...! There's no time, we must move quickly!",
						"japanese": "巨大なシステムが族長の怒りを利用している…！時間がない、早く動かないと！",
						"chinese": "一个巨大的系统正在利用酋长的愤怒……！时间不多了，我们必须迅速行动！",
						"french": "Un système colossal exploite la rage du chef...! Il n'y a pas de temps, nous devons agir vite !",
						"spanish": "¡Un sistema colosal está explotando la ira del cacique...! ¡No hay tiempo, debemos movernos rápido!",
						"vietnamese": "Một hệ thống khổng lồ đang lợi dụng cơn thịnh nộ của tộc trưởng…! Không còn thời gian, chúng ta phải hành động nhanh lên!",
						"thai": "ระบบขนาดมหึมากำลังใช้ความโกรธของหัวหน้าเผ่า…! ไม่มีเวลาแล้ว เราต้องรีบไป!",
						"hindi": "एक विशाल प्रणाली सरदार के क्रोध का शोषण कर रही है...! समय नहीं है, हमें जल्दी चलना होगा!"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "여긴 곧 무너질 거야. 얼음이 살아있는 것처럼… 점점 더 빠르게 붕괴되고 있어.",
						"english": "This place will collapse soon. The ice, as if alive... is crumbling faster and faster.",
						"japanese": "ここもすぐ崩れるわ。氷が生きているかのように…どんどん早く崩壊している。",
						"chinese": "这里很快就要崩塌了。冰块仿佛活了一般……正在加速崩坏。",
						"french": "Cet endroit va bientôt s'effondrer. La glace, comme si elle était vivante... s'écroule de plus en plus vite.",
						"spanish": "Este lugar colapsará pronto. El hielo, como si estuviera vivo... se derrumba cada vez más rápido.",
						"vietnamese": "Nơi này sắp sụp đổ rồi. Băng đá, như thể có sự sống... đang sụp đổ ngày càng nhanh.",
						"thai": "ที่นี่กำลังจะพังทลายลงในไม่ช้า น้ำแข็งราวกับมีชีวิต... กำลังพังทลายเร็วขึ้นเรื่อยๆ",
						"hindi": "यह जगह जल्द ही ढह जाएगी। बर्फ, जैसे जीवित हो... तेज़ी से बिखर रही है।"
					}
				},
				{
					"content": {
						"korean": "인카, 무슨 소리야? 더 자세히 말해봐.",
						"english": "Inka, what are you talking about? Explain in more detail.",
						"japanese": "インカ、どういうこと？もっと詳しく説明して。",
						"chinese": "因卡，你说什么？再说详细点。",
						"french": "Inka, de quoi parles-tu ? Explique plus en détail.",
						"spanish": "Inka, ¿de qué hablas? Explica con más detalle.",
						"vietnamese": "Inka, cô đang nói gì vậy? Nói rõ hơn đi.",
						"thai": "อินคา เธอพูดอะไรน่ะ? อธิบายให้ละเอียดกว่านี้หน่อยสิ",
						"hindi": "इंंका, तुम क्या कह रही हो? और विस्तार से बताओ।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 거대한 슬픔이 느껴지지 않아? 족장의 영혼이 울고 있어.",
						"english": "Don't you feel this immense sorrow? The Elder's soul is weeping.",
						"japanese": "この巨大な悲しみを感じない？族長の魂が泣いているわ。",
						"chinese": "你没感受到这巨大的悲伤吗？族长的灵魂在哭泣。",
						"french": "Tu ne sens pas cette immense tristesse ? L'âme du Chef pleure.",
						"spanish": "¿No sientes esta inmensa tristeza? El alma del Jefe está llorando.",
						"vietnamese": "Cô không cảm nhận được nỗi buồn to lớn này sao? Linh hồn của Trưởng Lão đang khóc.",
						"thai": "เธอไม่รู้สึกถึงความเศร้าอันยิ่งใหญ่นี้หรือ? วิญญาณของหัวหน้าเผ่ากำลังร่ำไห้",
						"hindi": "क्या तुम्हें यह अपार दुख महसूस नहीं हो रहा? मुखिया की आत्मा रो रही है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "시스템이 그 영혼을 가둬두고, 그 분노를 연료 삼아 이 모든 재앙을 부르고 있어.",
						"english": "The system has imprisoned that soul, fueling this entire catastrophe with its wrath.",
						"japanese": "システムがその魂を閉じ込め、その怒りを燃料にして、この全ての災厄を呼んでいる。",
						"chinese": "系统囚禁了那个灵魂，以它的愤怒为燃料，正在召唤这一切灾难。",
						"french": "Le système a emprisonné cette âme, utilisant sa colère comme carburant pour provoquer toute cette catastrophe.",
						"spanish": "El sistema ha aprisionado esa alma, alimentando toda esta catástrofe con su ira.",
						"vietnamese": "Hệ thống đã giam cầm linh hồn đó, dùng sự phẫn nộ của nó làm nhiên liệu để gây ra toàn bộ tai họa này.",
						"thai": "ระบบได้กักขังวิญญาณนั้นไว้ และใช้ความโกรธแค้นของมันเป็นเชื้อเพลิงเรียกภัยพิบัติทั้งหมดนี้",
						"hindi": "सिस्टम ने उस आत्मा को कैद कर लिया है, और उसके क्रोध को ईंधन बनाकर इस सारी तबाही को बुला रहा है।"
					}
				},
				{
					"content": {
						"korean": "그럼 우리가 뭘 해야 해?",
						"english": "Then what should we do?",
						"japanese": "じゃあ、私たちは何をすればいいの？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "Entonces, ¿qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราต้องทำอะไร?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "막아야 해. 이 끔찍한 비극을. 시간이 정말 없어!",
						"english": "We must stop it. This terrible tragedy. There's truly no time!",
						"japanese": "止めなければ。この恐ろしい悲劇を。本当に時間がないわ！",
						"chinese": "我们必须阻止它。这场可怕的悲剧。真的没有时间了！",
						"french": "Nous devons l'arrêter. Cette terrible tragédie. Il n'y a vraiment plus de temps !",
						"spanish": "Debemos detenerlo. Esta terrible tragedia. ¡Realmente no hay tiempo!",
						"vietnamese": "Chúng ta phải ngăn chặn nó. Bi kịch khủng khiếp này. Thật sự không còn thời gian!",
						"thai": "เราต้องหยุดมันให้ได้ โศกนาฏกรรมอันเลวร้ายนี้ ไม่มีเวลาแล้วจริงๆ!",
						"hindi": "हमें इसे रोकना होगा। इस भयानक त्रासदी को। सच में समय नहीं है!"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 450,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "점점 더 거세지는 눈보라… 우리를 집어삼키려 해.",
						"english": "The blizzard grows fiercer... trying to swallow us whole.",
						"japanese": "ますます激しくなる吹雪…私たちを飲み込もうとしている。",
						"chinese": "暴风雪越来越猛烈……试图将我们吞噬。",
						"french": "La tempête de neige s'intensifie... essayant de nous engloutir.",
						"spanish": "La ventisca se vuelve más feroz... intentando engullirnos por completo.",
						"vietnamese": "Bão tuyết ngày càng dữ dội... như muốn nuốt chửng chúng ta.",
						"thai": "พายุหิมะทวีความรุนแรงขึ้นเรื่อยๆ... พยายามจะกลืนกินเรา",
						"hindi": "बर्फ़ीला तूफ़ान और भी तेज़ होता जा रहा है... हमें निगलने की कोशिश कर रहा है।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "정말 시간이 없는 건가… 이대로 가면 어떻게 되는 거야?",
						"english": "Is there really no time... What will happen if we continue like this?",
						"japanese": "本当に時間がないのか…このまま行くとどうなるの？",
						"chinese": "真的没有时间了吗……这样下去会怎么样？",
						"french": "N'y a-t-il vraiment plus de temps... Que se passera-t-il si nous continuons comme ça ?",
						"spanish": "¿Realmente no hay tiempo... Qué pasará si seguimos así?",
						"vietnamese": "Thật sự không còn thời gian sao... Nếu cứ tiếp tục thế này thì sẽ ra sao?",
						"thai": "ไม่มีเวลาแล้วจริงๆ หรือ... ถ้าเป็นแบบนี้ต่อไปจะเกิดอะไรขึ้น?",
						"hindi": "क्या सच में समय नहीं है... अगर हम ऐसे ही चलते रहे तो क्या होगा?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고통받는 영혼의 울부짖음이 이 모든 것을 부르고 있어.",
						"english": "The cries of suffering souls are calling forth all of this.",
						"japanese": "苦しむ魂の叫びが、この全てを呼んでいる。",
						"chinese": "受苦灵魂的哀嚎正在召唤这一切。",
						"french": "Les cris des âmes souffrantes appellent tout cela.",
						"spanish": "Los lamentos de las almas que sufren están invocando todo esto.",
						"vietnamese": "Tiếng kêu gào của những linh hồn đau khổ đang gọi mời tất cả những điều này.",
						"thai": "เสียงคร่ำครวญของวิญญาณที่ทนทุกข์กำลังเรียกสิ่งเหล่านี้ทั้งหมด",
						"hindi": "पीड़ित आत्माओं की चीखें ये सब बुला रही हैं।"
					},
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이대로 가면 우리도 모두 얼음 속에 갇힐 거야. 영원히… 족장처럼.",
						"english": "If we continue like this, we'll all be trapped in ice. Forever... like the Elder.",
						"japanese": "このまま行けば、私たちも皆氷の中に閉じ込められるわ。永遠に…族長のように。",
						"chinese": "这样下去，我们也会被困在冰中。永远……就像族长一样。",
						"french": "Si nous continuons ainsi, nous serons tous piégés dans la glace. Pour toujours... comme le Chef.",
						"spanish": "Si seguimos así, todos quedaremos atrapados en el hielo. Para siempre... como el Jefe.",
						"vietnamese": "Nếu cứ tiếp tục thế này, chúng ta cũng sẽ bị mắc kẹt trong băng. Mãi mãi... như Trưởng Lão.",
						"thai": "ถ้าเป็นแบบนี้ต่อไป เราทุกคนก็จะถูกขังอยู่ในน้ำแข็ง ชั่วนิรันดร์... เหมือนหัวหน้าเผ่า",
						"hindi": "अगर हम ऐसे ही चलते रहे, तो हम सब बर्फ़ में फंस जाएंगे। हमेशा के लिए... मुखिया की तरह।"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 550,
					"spot": [
						1,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 이상한 진동… 느껴져? 얼음 아래에서 무언가 깨어나고 있어.",
						"english": "This strange vibration... do you feel it? Something is awakening beneath the ice.",
						"japanese": "この奇妙な振動…感じる？氷の下で何かが目覚めようとしている。",
						"chinese": "这奇怪的震动……你感觉到了吗？冰层下有什么东西正在苏醒。",
						"french": "Cette étrange vibration… Tu la sens ? Quelque chose s'éveille sous la glace.",
						"spanish": "¿Esta extraña vibración... la sientes? Algo está despertando bajo el hielo.",
						"vietnamese": "Chấn động kỳ lạ này... ngươi có cảm nhận được không? Có thứ gì đó đang thức tỉnh dưới lớp băng.",
						"thai": "แรงสั่นสะเทือนแปลกๆ นี่... รู้สึกไหม? มีบางอย่างกำลังตื่นขึ้นใต้ผืนน้ำแข็ง",
						"hindi": "यह अजीब कंपन... क्या तुम्हें महसूस हो रहा है? बर्फ के नीचे कुछ जाग रहा है।"
					},
					"speaker": "inka",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 이상 돌아갈 수 없을 것 같아. 너무 깊이 들어왔어.",
						"english": "I don't think we can go back anymore. We've come too deep.",
						"japanese": "もう引き返せないだろう。あまりにも深く入りすぎた。",
						"chinese": "我们恐怕回不去了。已经深入太远了。",
						"french": "Je ne pense pas que nous puissions faire demi-tour. Nous sommes allés trop loin.",
						"spanish": "No creo que podamos volver atrás. Hemos llegado demasiado profundo.",
						"vietnamese": "Ta không nghĩ chúng ta có thể quay lại được nữa. Đã đi quá sâu rồi.",
						"thai": "ดูเหมือนเรากลับไปไม่ได้แล้ว เรามาลึกเกินไป",
						"hindi": "मुझे नहीं लगता कि हम अब वापस जा सकते हैं। हम बहुत गहरे आ गए हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "inka",
					"content": {
						"korean": "우리는 이미 너무 깊이 들어왔어. 하지만… 포기할 순 없어!",
						"english": "We've already come too deep. But... we can't give up!",
						"japanese": "もうずいぶん深く来た。しかし…諦めるわけにはいかない！",
						"chinese": "我们已经深入太远了。但是……不能放弃！",
						"french": "Nous sommes déjà allés trop loin. Mais… on ne peut pas abandonner !",
						"spanish": "Ya hemos llegado demasiado profundo. Pero... ¡no podemos rendirnos!",
						"vietnamese": "Chúng ta đã đi quá sâu rồi. Nhưng... không thể bỏ cuộc!",
						"thai": "เรามาลึกเกินไปแล้ว แต่... เราจะยอมแพ้ไม่ได้!",
						"hindi": "हम पहले ही बहुत गहरे आ गए हैं। लेकिन... हम हार नहीं मान सकते!"
					}
				},
				{
					"content": {
						"korean": "족장의 영혼을 구해야 해. 더 큰 재앙이 오기 전에.",
						"english": "We must save the Chief's soul. Before a greater catastrophe arrives.",
						"japanese": "族長の魂を救わなければ。より大きな災厄が来る前に。",
						"chinese": "我们必须拯救族长的灵魂。在更大的灾难降临之前。",
						"french": "Nous devons sauver l'âme du Chef. Avant qu'une catastrophe plus grande n'arrive.",
						"spanish": "Debemos salvar el alma del Jefe. Antes de que llegue una catástrofe mayor.",
						"vietnamese": "Chúng ta phải cứu linh hồn của Tộc trưởng. Trước khi tai họa lớn hơn ập đến.",
						"thai": "เราต้องช่วยวิญญาณของหัวหน้า ก่อนที่หายนะครั้งใหญ่กว่าจะมาถึง",
						"hindi": "हमें मुखिया की आत्मा को बचाना होगा। इससे पहले कि कोई बड़ी आपदा आ जाए।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "서둘러! 시간이 정말 없어! 재앙의 카운트다운이 눈앞에 있어!",
						"english": "Hurry! There's really no time! The countdown to disaster is upon us!",
						"japanese": "急げ！本当に時間がない！破滅へのカウントダウンが目の前だ！",
						"chinese": "快点！真的没时间了！灾难的倒计时就在眼前！",
						"french": "Dépêche-toi ! Il n'y a vraiment plus de temps ! Le compte à rebours de la catastrophe est devant nous !",
						"spanish": "¡Date prisa! ¡Realmente no hay tiempo! ¡La cuenta regresiva hacia el desastre está ante nosotros!",
						"vietnamese": "Nhanh lên! Thực sự không còn thời gian nữa! Đồng hồ đếm ngược của tai họa đang ở ngay trước mắt!",
						"thai": "เร็วเข้า! ไม่มีเวลาแล้ว! การนับถอยหลังสู่หายนะอยู่ตรงหน้าเรา!",
						"hindi": "जल्दी करो! सच में समय नहीं है! आपदा का काउंटडाउन हमारे सामने है!"
					},
					"speaker": "inka",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악… 고통은… 끝나지 않는다… 시스템은… 영원히….",
						"english": "Kuaaagh… The pain… never ends… The system… forever…",
						"japanese": "クアアア… 苦痛は… 終わらない… システムは… 永遠に…。",
						"chinese": "啊啊啊……痛苦……永无止境……系统……永恒……",
						"french": "Kuaaagh… La douleur… ne finit jamais… Le système… pour toujours…",
						"spanish": "¡Kuaaagh…! El dolor… no termina… El sistema… para siempre…",
						"vietnamese": "Grừ… Nỗi đau… không bao giờ dứt… Hệ thống… vĩnh cửu…",
						"thai": "คราก… ความเจ็บปวด… ไม่สิ้นสุด… ระบบ… ชั่วนิรันดร์…",
						"hindi": "खूंखार… दर्द… कभी खत्म नहीं होता… सिस्टम… हमेशा के लिए…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "괴물을 쓰러뜨렸지만… 이 고통은 끝나지 않는다고?",
						"english": "We defeated the monster… but this pain won't end?",
						"japanese": "怪物を倒したが… この苦痛は終わらないのか？",
						"chinese": "我们击败了怪物……但这种痛苦不会结束吗？",
						"french": "Nous avons vaincu le monstre… mais cette douleur ne finira pas ?",
						"spanish": "Derrotamos al monstruo… ¿pero este dolor no terminará?",
						"vietnamese": "Đã hạ gục quái vật… nhưng nỗi đau này không kết thúc sao?",
						"thai": "โค่นสัตว์ประหลาดได้แล้ว… แต่ความเจ็บปวดนี้จะไม่มีวันสิ้นสุดเหรอ?",
						"hindi": "हमने राक्षस को हरा दिया… लेकिन यह दर्द खत्म नहीं होगा?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "우리는 이 작은 불쌍한 영혼을 해방시켰어. 하지만… 이 모든 것을 조종하는 실체는 아직 남아있어.",
						"english": "We freed this poor little soul. But… the entity controlling all this still remains.",
						"japanese": "この小さな哀れな魂を解放した。しかし… この全てを操る実体はまだ残っている。",
						"chinese": "我们解放了这个可怜的小灵魂。但是……操纵这一切的实体仍然存在。",
						"french": "Nous avons libéré cette pauvre petite âme. Mais… l'entité qui contrôle tout cela demeure encore.",
						"spanish": "Hemos liberado a esta pobre alma. Pero… la entidad que controla todo esto aún permanece.",
						"vietnamese": "Chúng ta đã giải thoát linh hồn bé nhỏ đáng thương này. Nhưng… thực thể điều khiển tất cả vẫn còn đó.",
						"thai": "เราปลดปล่อยวิญญาณเล็กๆ ที่น่าสงสารนี้แล้ว แต่… สิ่งที่ควบคุมทั้งหมดนี้ยังคงอยู่",
						"hindi": "हमने इस गरीब छोटी आत्मा को आज़ाद कर दिया। लेकिन… इस सब को नियंत्रित करने वाली इकाई अभी भी मौजूद है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "inka",
					"content": {
						"korean": "더 깊이 파고들어야 해. 족장의 진짜 고통을 끝내려면.",
						"english": "We need to dig deeper. To end the chieftain's true suffering.",
						"japanese": "もっと深く掘り下げなければならない。族長の本当の苦痛を終わらせるために。",
						"chinese": "我们需要挖得更深。为了结束酋长真正的痛苦。",
						"french": "Nous devons creuser plus profond. Pour mettre fin à la véritable souffrance du chef.",
						"spanish": "Tenemos que profundizar más. Para acabar con el verdadero sufrimiento del jefe.",
						"vietnamese": "Chúng ta cần phải đào sâu hơn. Để chấm dứt nỗi đau thực sự của thủ lĩnh.",
						"thai": "เราต้องขุดให้ลึกกว่านี้ เพื่อยุติความทุกข์ทรมานที่แท้จริงของหัวหน้าเผ่า",
						"hindi": "हमें और गहराई तक जाना होगा। मुखिया के असली दर्द को खत्म करने के लिए।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "승리했지만, 더 큰 어둠이 기다리고 있었다. 빙하는 멈추지 않고, 시간은 계속 사라지고 있었다.",
						"english": "We won, but a greater darkness awaited. The glacier did not stop, and time continued to vanish.",
						"japanese": "勝利したが、より大きな闇が待ち受けていた。氷河は止まらず、時間は消え続けていた。",
						"chinese": "我们胜利了，但更大的黑暗正在等待。冰川没有停止，时间还在不断消失。",
						"french": "Nous avons gagné, but une obscurité plus grande nous attendait. Le glacier ne s'arrêtait pas, et le temps continuait de disparaître.",
						"spanish": "Ganamos, pero una oscuridad mayor nos esperaba. El glaciar no se detenía, y el tiempo seguía desvaneciéndose.",
						"vietnamese": "Đã chiến thắng, nhưng một bóng tối lớn hơn đang chờ đợi. Băng hà không dừng lại, và thời gian cứ tiếp tục biến mất.",
						"thai": "เราชนะแล้ว แต่ความมืดมิดที่ยิ่งใหญ่กว่ากำลังรออยู่ ธารน้ำแข็งไม่หยุดนิ่ง และเวลาก็ยังคงเลือนหายไป",
						"hindi": "हम जीत गए, लेकिन एक बड़ा अंधेरा इंतजार कर रहा था। ग्लेशियर नहीं रुका, और समय लगातार गायब हो रहा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "빙하 곰의 거대한 발톱이 모든 것을 짓눌렀다. 온몸이 얼어붙는 듯했다.",
						"english": "The glacier bear's colossal claws crushed everything. It felt as if my whole body was freezing.",
						"japanese": "氷河熊の巨大な爪がすべてを押しつぶした。全身が凍りつくようだった。",
						"chinese": "冰川熊的巨大利爪碾碎了一切。感觉全身都在冻结。",
						"french": "Les griffes colossales de l'ours des glaciers ont tout écrasé. On aurait dit que tout mon corps gelait.",
						"spanish": "Las colosales garras del oso glaciar aplastaron todo. Sentía como si todo mi cuerpo se congelara.",
						"vietnamese": "Móng vuốt khổng lồ của gấu băng hà nghiền nát mọi thứ. Cả người như đóng băng.",
						"thai": "กรงเล็บมหึมาของหมีธารน้ำแข็งบดขยี้ทุกสิ่ง ราวกับว่าทั้งตัวกำลังแข็งตัว",
						"hindi": "ग्लेशियर भालू के विशाल पंजों ने सब कुछ कुचल दिया। ऐसा लगा जैसे मेरा पूरा शरीर जम रहा हो।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 자들… 감히 시스템의 맹세를 거역하는가! 너희도 영원히 갇히리라!",
						"english": "Fools… Dare you defy the system's oath! You too shall be trapped forever!",
						"japanese": "愚か者どもめ… よくもシステムの誓いを破ったな！ お前たちも永遠に閉じ込められるだろう！",
						"chinese": "愚蠢的家伙……竟敢违抗系统的誓言！你们也必将永远被困！",
						"french": "Imbéciles… Osez-vous défier le serment du système ! Vous aussi serez piégés pour toujours !",
						"spanish": "¡Necios…! ¡Osáis desafiar el juramento del sistema! ¡Vosotros también seréis atrapados para siempre!",
						"vietnamese": "Lũ ngu ngốc… Dám chống lại lời thề của hệ thống sao! Các ngươi cũng sẽ bị giam cầm vĩnh viễn!",
						"thai": "พวกคนโง่… กล้าดียังไงมาท้าทายคำสาบานของระบบ! พวกเจ้าก็จะต้องถูกขังชั่วนิรันดร์!",
						"hindi": "मूर्खों… क्या तुम सिस्टम की शपथ का उल्लंघन करने की हिम्मत करते हो! तुम भी हमेशा के लिए फंस जाओगे!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it… It's not… over yet!",
						"japanese": "くそっ… まだ… 終わってない！",
						"chinese": "该死……还没……结束！",
						"french": "Mince… Ce n'est pas… encore fini !",
						"spanish": "¡Maldita sea…! ¡Aún… no ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn… chưa xong!",
						"thai": "บ้าจริง… ยัง… ไม่จบ!",
						"hindi": "धिक्कार है… यह अभी… खत्म नहीं हुआ है!"
					}
				},
				{
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "포기하지 마! 아직 기회는 있어! 족장의 영혼을… 구해야 해!",
						"english": "Don't give up! There's still a chance! We must… save the chieftain's soul!",
						"japanese": "諦めるな！ まだチャンスはある！ 族長の魂を… 救わなければ！",
						"chinese": "别放弃！还有机会！我们必须……拯救酋长的灵魂！",
						"french": "N'abandonnez pas ! Il y a encore une chance ! Nous devons… sauver l'âme du chef !",
						"spanish": "¡No te rindas! ¡Aún hay una oportunidad! ¡Debemos… salvar el alma del jefe!",
						"vietnamese": "Đừng bỏ cuộc! Vẫn còn cơ hội! Phải… cứu linh hồn của thủ lĩnh!",
						"thai": "อย่ายอมแพ้! ยังมีโอกาส! เราต้อง… ช่วยเหลือวิญญาณของหัวหน้าเผ่า!",
						"hindi": "हार मत मानो! अभी भी मौका है! हमें… मुखिया की आत्मा को बचाना है!"
					},
					"emotion": "angry",
					"speaker": "inka",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "저 멀리 거대한 그림자가 움직였다. 감히 접근할 수 없는 위압감이었다.",
						"english": "A colossal shadow stirred in the distance. Its presence was too intimidating to approach.",
						"japanese": "遠くで巨大な影が動いた。あえて近づけないほどの威圧感だった。",
						"chinese": "远处一个巨大的影子在移动。那是一种令人不敢靠近的压迫感。",
						"french": "Une ombre colossale s'agita au loin. Une présence trop intimidante pour oser s'approcher.",
						"spanish": "Una sombra colosal se agitó en la distancia. Su presencia era demasiado intimidante para acercarse.",
						"vietnamese": "Một cái bóng khổng lồ lay động ở đằng xa. Một sự uy hiếp khiến người ta không dám lại gần.",
						"thai": "เงาขนาดมหึมาเคลื่อนไหวอยู่ไกลๆ เป็นความกดดันที่น่าเกรงขามจนไม่กล้าเข้าใกล้",
						"hindi": "दूर एक विशाल छाया हिल रही थी। उसकी उपस्थिति इतनी भयावह थी कि पास जाना असंभव था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "침묵을 깨뜨린 어리석은 자들… 이곳에 발을 들인 대가를 치를 것이다.",
						"english": "Fools who broke the silence... you will pay the price for stepping foot in this place.",
						"japanese": "沈黙を破った愚か者どもめ…この地に足を踏み入れた代償を払うがいい。",
						"chinese": "打破沉默的愚蠢之徒……你们将为踏足此地付出代价。",
						"french": "Fous qui avez brisé le silence... vous paierez le prix d'avoir mis le pied en ce lieu.",
						"spanish": "Necios que rompieron el silencio... pagaréis el precio por pisar este lugar.",
						"vietnamese": "Những kẻ ngu xuẩn đã phá vỡ sự im lặng... sẽ phải trả giá vì đã đặt chân đến nơi này.",
						"thai": "พวกโง่เขลาที่ทำลายความเงียบ... เจ้าจะต้องชดใช้สำหรับก้าวเข้ามาในที่แห่งนี้",
						"hindi": "मूर्ख जिन्होंने चुप्पी तोड़ी... तुम्हें इस जगह पर कदम रखने की कीमत चुकानी होगी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "물러서, 괴물! 우리는 멈추지 않아!"
					}
				},
				{
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "잠깐! 저 괴물도… 시스템의 노예야. 고통받고 있어!",
						"english": "Wait! That monster, too... is a slave of the system. It's suffering!",
						"japanese": "待て！あの怪物も…システムの手先だ。苦しんでいる！",
						"chinese": "等等！那个怪物也……是系统的奴隶。它在受苦！",
						"french": "Attends ! Ce monstre aussi… est un esclave du système. Il souffre !",
						"spanish": "¡Espera! Ese monstruo también... es un esclavo del sistema. ¡Está sufriendo!",
						"vietnamese": "Khoan đã! Con quái vật đó cũng... là nô lệ của hệ thống. Nó đang chịu đựng!",
						"thai": "เดี๋ยว! สัตว์ประหลาดตัวนั้นก็... เป็นทาสของระบบ มันกำลังทรมาน!",
						"hindi": "रुको! वह राक्षस भी... सिस्टम का गुलाम है। वह पीड़ित है!"
					}
				},
				{
					"content": {
						"korean": "…무슨 말이야, 인카? 저게 괴물이라고?",
						"english": "...What do you mean, Inka? That's a monster, isn't it?",
						"japanese": "…どういうことだ、インカ？あれが怪物だって？",
						"chinese": "……你什么意思，印卡？那是个怪物，不是吗？",
						"french": "...Que veux-tu dire, Inka ? C'est un monstre, non ?",
						"spanish": "...¿Qué quieres decir, Inka? ¿Eso es un monstruo?",
						"vietnamese": "...Ý ngươi là sao, Inka? Đó là một con quái vật phải không?",
						"thai": "...หมายความว่าไง อินก้า? นั่นมันสัตว์ประหลาดไม่ใช่เหรอ?",
						"hindi": "...तुम्हारा क्या मतलब है, इंका? वह एक राक्षस है, है ना?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "보여… 억압된 분노가 끔찍한 형상으로 나타난 것뿐이야. 죽음으로 해방될 수 없어!",
						"english": "You see… it's just suppressed rage taking a horrific form. Death won't free it!",
						"japanese": "見える… 抑圧された怒りが恐ろしい姿で現れただけだ。死では解放されない！",
						"chinese": "你看……那只是被压抑的愤怒以恐怖的形式出现。死亡无法将其解放！",
						"french": "Tu vois… ce n'est que la rage refoulée qui a pris une forme horrible. La mort ne le libérera pas !",
						"spanish": "Lo ves… es solo la ira reprimida tomando una forma horrible. ¡La muerte no lo liberará!",
						"vietnamese": "Ngươi thấy đó… đó chỉ là cơn thịnh nộ bị dồn nén hiện hình ghê tởm. Cái chết không thể giải thoát!",
						"thai": "เจ้าเห็นไหม… นี่เป็นเพียงความโกรธที่ถูกกดขี่ที่ปรากฏในรูปที่น่ากลัวเท่านั้น ความตายไม่อาจปลดปล่อยมันได้!",
						"hindi": "देखो… यह सिर्फ दबी हुई क्रोध है जो एक भयानक रूप में प्रकट हुआ है। मौत इसे आज़ाद नहीं कर सकती!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원한 겨울, 모든 것이 얼어붙은 대지.",
			"살아있는 듯 꿈틀대는 빙하는 분노를 토해내고 있었다.",
			"갇혀버린 족장의 영혼, 그리고 그를 조종하는 시스템의 외침.",
			"시간은 없다. 재앙의 카운트다운이 시작되었다."
		],
		"english": [
			"Eternal winter, a land where everything is frozen.",
			"The glacier, alive and writhing, spewed forth its rage.",
			"The trapped soul of the chieftain, and the system's cry controlling him.",
			"No time left. The countdown to disaster has begun."
		],
		"japanese": [
			"永遠の冬、すべてが凍りついた大地。",
			"生きているかのように蠢く氷河は、怒りを吐き出していた。",
			"閉じ込められた族長の魂、そして彼を操るシステムの叫び。",
			"時間はない。災厄へのカウントダウンが始まった。"
		],
		"chinese": [
			"永恒的冬天，万物冻结的大地。",
			"冰川仿佛活着般蠕动着，倾泻着它的愤怒。",
			"被困酋长的灵魂，以及控制他的系统的嘶吼。",
			"时间不多了。灾难的倒计时已然开始。"
		],
		"french": [
			"Hiver éternel, une terre où tout est gelé.",
			"Le glacier, vivant et se tordant, crachait sa fureur.",
			"L'âme piégée du chef, et le cri du système qui le contrôle.",
			"Plus le temps. Le compte à rebours de la catastrophe a commencé."
		],
		"spanish": [
			"Invierno eterno, una tierra donde todo está congelado.",
			"El glaciar, vivo y retorciéndose, escupía su rabia.",
			"El alma atrapada del cacique, y el grito del sistema que lo controla.",
			"No queda tiempo. La cuenta atrás para el desastre ha comenzado."
		],
		"vietnamese": [
			"Mùa đông vĩnh cửu, vùng đất nơi mọi thứ đóng băng.",
			"Tảng băng sống động, đang quằn quại, tuôn trào cơn thịnh nộ.",
			"Linh hồn tộc trưởng bị giam cầm, cùng tiếng thét của hệ thống đang điều khiển hắn.",
			"Không còn thời gian. Đếm ngược đến thảm họa đã bắt đầu."
		],
		"thai": [
			"เหมันต์นิรันดร์ ดินแดนที่ทุกสิ่งหยุดนิ่ง",
			"ธารน้ำแข็งที่บิดเกรี้ยวราวกับมีชีวิต ปล่อยความโกรธแค้นออกมา",
			"วิญญาณของหัวหน้าเผ่าที่ถูกกักขัง และเสียงกรีดร้องของระบบที่ควบคุมเขา",
			"ไม่มีเวลาแล้ว การนับถอยหลังสู่หายนะได้เริ่มต้นขึ้น"
		],
		"hindi": [
			"शाश्वत सर्दी, एक ऐसी भूमि जहाँ सब कुछ जम गया है।",
			"जीवित और मचलते हुए ग्लेशियर ने अपना क्रोध उगला।",
			"सरदार की फंसी हुई आत्मा, और उसे नियंत्रित करने वाले सिस्टम की चीख।",
			"समय नहीं बचा। आपदा का उलटी गिनती शुरू हो गई है।"
		]
	}
} as const;
